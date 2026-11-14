
function Footer() {
  return (
    <footer className="w-full bg-[#E8A0A8] px-6 py-14 text-[#71334F] sm:px-10 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold text-white">
            SlipperStore<span className="text-[#71334F]">.</span>
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#71334F]">
            Step into comfort and elegance with our beautiful collection of
            fashionable slippers.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#home" className="transition hover:text-white">Home</a></li>
            <li><a href="#shop" className="transition hover:text-white">Shop</a></li>
            <li><a href="#about" className="transition hover:text-white">About Us</a></li>
            <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Customer Support</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#shop" className="transition hover:text-white">Shopping Guide</a></li>
            <li><a href="#contact" className="transition hover:text-white">FAQs</a></li>
            <li><a href="#contact" className="transition hover:text-white">Privacy Policy</a></li>
            <li><a href="#contact" className="transition hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Get In Touch</h3>
          <p className="text-sm leading-7">
            Have questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@slipperstore.com"
            className="mt-3 inline-block break-all text-sm font-semibold transition hover:text-white"
          >
            hello@slipperstore.com
          </a>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/40 pt-6 text-center">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} SlipperStore. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-white">
          Comfort • Style • Elegance
        </p>
      </div>
    </footer>
  );
}

export default Footer;
