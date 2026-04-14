import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f5a4c] text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            KeenKeeper
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-medium">Social Links</h2>

            <div className="mt-5 flex items-center justify-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-[#1f5a4c] flex items-center justify-center hover:scale-105 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-[#1f5a4c] flex items-center justify-center hover:scale-105 transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-[#1f5a4c] flex items-center justify-center hover:scale-105 transition"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-white/70">
            <p className="text-center sm:text-left">
              © 2026 KeenKeeper. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
