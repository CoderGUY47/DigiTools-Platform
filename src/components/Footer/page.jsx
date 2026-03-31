import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 mt-0">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <img src="/logo.png" alt="" className="w-44 h-10" />
            <p className="text-lg font-light text-gray-400 leading-relaxed max-w-sm mt-4">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-2xl font-medium mb-6">Product</h4>
            <ul className="space-y-4 text-lg font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-2xl font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-lg font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
    
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-medium mb-6">Resources</h4>
            <ul className="space-y-4 text-lg font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-2xl font-medium mb-6">Social Links</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                <TbBrandInstagramFilled size={25} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-base md:text-lg font-normal">© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8 text-gray-500 text-base md:text-lg font-normal">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;