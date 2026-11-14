
import { useState } from "react";

function ProductCard({ product, onAddToCart, onViewDetails, onDelete }) {
  const [liked, setLiked] = useState(false);
  const [imageRotated, setImageRotated] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (window.innerWidth < 768) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRotation({
      x: ((y / rect.height) - 0.5) * -5,
      y: ((x / rect.width) - 0.5) * 5,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const actionButton =
    "flex min-h-11 w-full min-w-0 items-center justify-center rounded-full px-3 py-2 text-center text-xs font-semibold leading-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 sm:text-sm";

  return (
    <article
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#F4D5E2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 200ms ease-out, box-shadow 300ms ease",
      }}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#FFF0F5] to-[#F2E9FA] sm:h-72">

        <img
          src={product.image}
          alt={product.name}
          onClick={() => setImageRotated((previous) => !previous)}
          title="Click to rotate the slipper"
          className="h-full w-full cursor-pointer object-contain p-6"
          style={{
            transform: `rotateY(${imageRotated ? 360 : 0}deg)`,
            transition: "transform 800ms ease-in-out",
          }}
        />

        {/* Category */}
        <span className="absolute left-4 top-4 max-w-[65%] truncate rounded-full bg-[#B83268] px-4 py-2 text-xs font-medium text-white shadow-sm">
          {product.category}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setLiked((previous) => !previous)}
          className="absolute right-4 top-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#B83268] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#B83268] hover:text-white"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <h3 className="min-h-14 break-words text-lg font-semibold leading-7 text-[#6A1B5D]">
          {product.name}
        </h3>

        <p className="mt-2 min-h-12 break-words text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <p className="text-xl font-semibold text-[#B83268]">
            Rs. {product.price.toLocaleString("en-PK")}
          </p>
        </div>

        {/* Product Actions */}
        <div className="mt-auto pt-6">

          <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={() => onAddToCart?.(product)}
              className={`${actionButton} bg-[#F8BBD0] text-[#6A1B5D] hover:bg-[#B83268] hover:text-white`}
            >
              Add to Cart
            </button>

            <button
              type="button"
              onClick={() => onViewDetails?.(product)}
              className={`${actionButton} border border-[#E8A5BF] bg-white text-[#B83268] hover:bg-[#F8BBD0] hover:text-[#6A1B5D]`}
            >
              View Details
            </button>

          </div>

          {/* Delete Product */}
          <button
            type="button"
            onClick={() => onDelete?.(product.id)}
            className="mt-4 flex min-h-10 w-full items-center justify-center rounded-full border border-pink-100 bg-[#FFF8FC] px-4 py-2 text-xs font-medium text-[#B83268] transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            Delete Product
          </button>

        </div>
      </div>
    </article>
  );
}

export default ProductCard;
