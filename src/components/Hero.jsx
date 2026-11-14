
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[420px] w-full items-center justify-start overflow-hidden bg-white sm:min-h-[470px] lg:min-h-[520px]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl px-7 text-left sm:px-12 lg:px-20"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#D94F87] sm:text-base">
          Comfort Meets Style
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#C93678] sm:text-5xl lg:text-6xl">
          Elegance In Every Step
        </h1>

        <p className="mt-4 max-w-lg text-sm font-medium leading-7 text-[#A83268] sm:text-base">
          Discover beautiful slippers designed to make every step comfortable,
          stylish, and special.
        </p>

        <a
          href="#shop"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#F4C2D7] px-7 py-3 text-sm font-semibold text-[#71334F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8A0BC] hover:shadow-lg"
        >
          Explore Collection
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
