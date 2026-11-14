
import ProductCard from "./ProductCard";

function ProductList({
  products,
  onAddToCart,
  onViewDetails,
  onDelete,
}) {
  return (
    <section
      id="shop"
      className="w-full bg-gradient-to-b from-[#fff8fc] via-[#FFF1F7] to-[#FCEAF3] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">

          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#B83268] sm:text-sm">
            Our Collection
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#6A1B5D] sm:text-4xl lg:text-5xl">
            Find Your Perfect Pair
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Discover beautiful slippers designed to make
            every step comfortable and stylish.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#E8A5BF]" />

        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
                onDelete={onDelete}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Collection */
          <div className="mx-auto max-w-lg rounded-3xl border border-[#F4D5E2] bg-white px-6 py-16 text-center shadow-sm">

            <div className="mb-5 text-5xl">🥿</div>

            <h3 className="text-xl font-semibold text-[#6A1B5D]">
              No Slippers Found
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              We couldn't find any products matching your search.
              Try another product name.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

export default ProductList;
