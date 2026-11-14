
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import productsData from "./data/products";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const handleAddToCart = (product) => {
    if (!product || !product.id) return;

    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((previous) =>
        previous.filter((product) => product.id !== id)
      );

      setCart((previous) =>
        previous.filter((item) => item.id !== id)
      );
    }
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const ovalButton =
    "inline-flex min-h-11 items-center justify-center whitespace-normal rounded-full px-5 py-3 text-center text-sm font-medium leading-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8fc]">

      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main>
        <Hero />

        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onViewDetails={setSelectedProduct}
          onDelete={handleDelete}
        />
      </main>

      {/* Spacious separation before the full-width footer */}
      <div className="mt-24 w-full border-t border-pink-100 bg-[#fff8fc] pt-10 sm:mt-28 sm:pt-12 lg:mt-32 lg:pt-14">
        <Footer />
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">

            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-2xl text-[#B83268] transition hover:bg-pink-200"
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="mt-8 h-64 w-full rounded-2xl bg-pink-50 object-contain"
            />

            <h2 className="mt-5 text-2xl font-semibold text-purple-950">
              {selectedProduct.name}
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              {selectedProduct.description}
            </p>

            <p className="mt-4 text-2xl font-semibold text-[#B83268]">
              Rs. {selectedProduct.price.toLocaleString("en-PK")}
            </p>

            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                setSelectedProduct(null);
                setCartOpen(true);
              }}
              className={`${ovalButton} mt-6 w-full bg-[#F8BBD0] text-[#6A1B5D] hover:bg-[#B83268] hover:text-white`}
            >
              Add to Cart
            </button>

          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/50"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="flex items-center justify-between border-b border-pink-100 p-5">
              <div>
                <h2 className="text-xl font-semibold text-purple-950">
                  Your Shopping Bag
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {cartCount} items in your bag
                </p>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close shopping cart"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-2xl text-[#B83268] transition hover:bg-pink-200"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">

              {cart.length === 0 ? (
                <div className="py-20 text-center">
                  <div className="mb-5 text-6xl">🛍️</div>

                  <h3 className="text-xl font-semibold text-purple-950">
                    Your bag is empty
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Add your favourite slippers to get started.
                  </p>

                  <button
                    onClick={() => setCartOpen(false)}
                    className={`${ovalButton} mt-6 bg-[#F8BBD0] text-[#6A1B5D] hover:bg-[#B83268] hover:text-white`}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-pink-100 pb-5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 shrink-0 rounded-2xl bg-pink-50 object-contain"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="break-words font-semibold text-purple-950">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-[#B83268]">
                          Rs. {item.price.toLocaleString("en-PK")}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label={`Decrease ${item.name} quantity`}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[#B83268] transition hover:bg-pink-300"
                          >
                            −
                          </button>

                          <span className="min-w-5 text-center text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            aria-label={`Increase ${item.name} quantity`}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-[#B83268] transition hover:bg-pink-300"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={`${ovalButton} min-h-9 shrink-0 self-start px-3 py-2 text-xs text-[#B83268] hover:bg-pink-100`}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-pink-100 bg-[#fff8fc] p-6">

                <div className="flex justify-between gap-3 text-lg font-semibold text-purple-950">
                  <span>Total</span>

                  <span className="text-right">
                    Rs. {totalPrice.toLocaleString("en-PK")}
                  </span>
                </div>

                <button
                  onClick={() =>
                    alert("Checkout functionality will be added next!")
                  }
                  className={`${ovalButton} mt-5 w-full bg-[#B83268] text-white hover:bg-[#92234F]`}
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => setCartOpen(false)}
                  className={`${ovalButton} mt-3 w-full border border-[#E8A5BF] bg-white text-[#B83268] hover:bg-pink-100`}
                >
                  Continue Shopping
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
