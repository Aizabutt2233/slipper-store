
import { useState } from "react";

function Navbar({
  cartCount = 0,
  onCartClick,
  searchQuery = "",
  onSearchChange = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const clearSearch = () => {
    onSearchChange("");
  };

  const scrollToProducts = () => {
    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const navLink =
    "relative whitespace-nowrap text-sm font-medium text-[#71334F] transition duration-300 hover:text-[#B83268] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#B83268] after:transition-all after:duration-300 hover:after:w-full";

  const iconButton =
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FCE4EC] text-xl text-[#B83268] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B83268] hover:text-white hover:shadow-md active:scale-95 sm:h-11 sm:w-11";

  const actionButton =
    "inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-[#B83268] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#92234F] hover:shadow-md active:scale-95";

  const links = [
    ["Home", "#home"],
    ["Shop", "#shop"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/95 shadow-sm backdrop-blur-md">

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:py-4">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 text-xl font-bold tracking-tight text-[#6A1B5D] transition hover:scale-[1.02] sm:text-2xl md:text-3xl"
        >
          Slipper<span className="text-[#D65D91]">Store.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map(([label, link]) => (
            <a key={label} href={link} className={navLink}>
              {label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Search */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className={iconButton}
            aria-label="Toggle search"
            aria-expanded={searchOpen}
          >
            ⌕
          </button>

          {/* Wishlist */}
          <button
            type="button"
            onClick={() => alert("Your wishlist is coming soon!")}
            className={iconButton}
            aria-label="Wishlist"
          >
            ♡
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={onCartClick}
            className={iconButton}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            🛍
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#B83268] px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${iconButton} md:hidden`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Search Section */}
      {searchOpen && (
        <div className="border-t border-pink-100 bg-gradient-to-r from-[#FFF1F6] via-[#FCE4EC] to-[#F5E9FA] px-4 py-5 sm:px-6">
          <div className="mx-auto max-w-5xl">

            <label
              htmlFor="product-search"
              className="mb-3 block text-xs font-semibold tracking-wider text-[#71334F] sm:text-sm"
            >
              FIND YOUR FAVOURITE SLIPPERS
            </label>

            <div className="flex min-h-[54px] items-center gap-2 rounded-full border border-[#E8A5BF] bg-white px-3 shadow-sm transition-all duration-300 focus-within:border-[#B83268] focus-within:shadow-md sm:gap-3 sm:px-5">

              <span className="shrink-0 text-2xl text-[#D65D91]">
                ⌕
              </span>

              <input
                id="product-search"
                type="search"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    scrollToProducts();
                  }
                }}
                placeholder="Search by slipper name..."
                autoComplete="off"
                className="h-12 min-w-0 flex-1 bg-transparent text-sm text-[#6A1B5D] outline-none placeholder:text-gray-400 sm:text-base"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FCE4EC] text-lg text-[#B83268] transition hover:bg-[#F8BBD0]"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

              <button
                type="button"
                onClick={scrollToProducts}
                className={`${actionButton} hidden sm:inline-flex`}
              >
                Search
              </button>
            </div>

            <p className="mt-3 text-xs text-[#986A83]">
              Popular searches: Pink, Bridal, White, Lavender and Platform
            </p>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-pink-100 bg-[#FFF8FC] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="rounded-full px-5 py-3 text-sm font-medium text-[#71334F] transition duration-300 hover:bg-[#F8BBD0] hover:text-[#6A1B5D]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
