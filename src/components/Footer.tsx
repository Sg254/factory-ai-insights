const Footer = () => {
  return (
    <footer className="bg-[#000435] py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} FactoryAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
