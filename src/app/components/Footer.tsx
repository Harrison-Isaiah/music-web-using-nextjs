function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm mb-3"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm mb-3"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm mb-3"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm mb-3"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm mb-3"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm mb-3"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-sm mb-3"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm mb-3">Karachi, Pakistan</p>
          <p className="text-sm mb-3">Phase VII 75500</p>
          <p className="text-sm mb-3">Email: harrisonrafaqat@gmail.com</p>
          <p className="text-sm mb-3">Phone: 0343 - 3220452</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
