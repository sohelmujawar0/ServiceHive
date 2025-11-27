export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h1
              className="ml-3 text-3xl sm:text-4xl font-bold
              bg-linear-to-r from-purple-500 via-pink-500 to-red-500
              bg-clip-text text-transparent"
            >
              <i>ServiceHive</i>
            </h1>

            <p className="text-gray-400 text-sm leading-6 mt-3">
              At ServiceHive, we bring verified home service professionals right to your 
              doorstep with transparent pricing, fast booking, and guaranteed satisfaction.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a className="hover:text-white" href="/about-us">About Us</a></li>
              <li><a className="hover:text-white" href="/careers">Careers</a></li>
              <li><a className="hover:text-white" href="/investors">Investor Relations</a></li>
              <li><a className="hover:text-white" href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a className="hover:text-white" href="/help">Help Center</a></li>
              <li><a className="hover:text-white" href="/terms">Terms & Conditions</a></li>
              <li><a className="hover:text-white" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="/refunds">Refund Policy</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect with Us</h3>

            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 ServiceHive. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
