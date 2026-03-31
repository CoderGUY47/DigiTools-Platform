import { FiPlay } from "react-icons/fi";

const page = () => {
  return (
    <>
    <div className="relative min-h-162.5 mt-14 md:mt-30 flex items-center overflow-hidden w-[80%] mx-auto flex flex-col">
      <div className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center space-y-4">
        {/* leftpart */}
        <div className="text-center lg:text-left">
          <div className="p-2 h-10 w-80 flex items-center justify-center lg:justify-start gap-3 text-lg bg-gray-400/45 rounded-full text-indigo-500 mx-auto lg:mx-0">
            <span className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-6xl max-w-xl font-semibold text-gray-900 mb-6 mt-3">Supercharge Your Digital Workflow</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-linear-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Products
            </button>
            <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold border-2 border-violet-600 hover:bg-linear-to-r hover:from-violet-600 hover:to-indigo-600 shadow-sm hover:shadow-md transition-all duration-300">
              <FiPlay className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors font-black" />
              <span className="bg-linear-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text group-hover:text-white group-hover:bg-none! transition-colors">
                Explore Tools
              </span>
            </button>
          </div>
        </div>
        {/* right part */}
        <div className="image flex justify-end self-end">
          <img src="/images/banner.png" alt="banner" className="w-full max-w-lg rounded-3xl h-[550px] object-cover" />
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
