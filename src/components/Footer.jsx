const Footer = () => {
    return (
      <footer className="mt-16 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-base text-gray-700 font-medium">
            © {new Date().getFullYear()} PromptHelp. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500 italic text-lg">
            Empowering your creativity, one prompt at a time.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  