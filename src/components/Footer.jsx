const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Basti Ki Pathshala</h2>
          <p className="text-sm text-gray-300">
            An initiative to bring quality education and digital learning to every corner of the community. Built with love, code, and a mission to uplift through knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#programs" className="hover:underline">Programs</a></li>
            <li><a href="#impact" className="hover:underline">Our Impact</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-300">Email: support@bastikipathshala.org</p>
          <p className="text-sm text-gray-300">Phone: +91-9876543210</p>
          <p className="text-sm text-gray-300 mt-2">Location: Basti, Uttar Pradesh, India</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
