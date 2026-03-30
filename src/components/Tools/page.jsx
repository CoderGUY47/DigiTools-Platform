import React, { use } from "react";
import { FaCheck } from "react-icons/fa";

const page = ({ productDataPromise }) => {
  const productData = use(productDataPromise);
  console.log(productData);

  return (
    <div className="pt-20 mb-20">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Premium Digital Tools
        </h1>
        <p className="max-w-2xl font-medium text-gray-400 text-lg md:text-xl leading-relaxed">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center gap-3 mt-12 p-1.5 bg-gray-50 rounded-full border border-gray-100 shadow-xs">
          <button className="px-8 py-3 bg-linear-to-tl from-violet-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-violet-100 transition-all">
            Products
          </button>
          <button className="px-8 py-3 text-gray-600 hover:text-violet-600 rounded-full font-bold transition-all cursor-pointer select-none">
            Cart (0)
          </button>
        </div>
      </div>

      <div>
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div className="glass card w-full h-full flex flex-col bg-black text-white/80 shadow-[2px_10px_30px_rgba(0,0,0,0.4)] rounded-3xl">
              <div className="card-body p-8 flex flex-row justify-between items-center gap-2">
                <img className="w-16 h-12 object-contain" src={product.icon} alt={product.name} />
                <span
                  className={`badge px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    product.tagType === "popular" ? "glass bg-amber-500/80 text-amber-50 border-amber-500/50"
                        : product.tagType === "best seller" ? "glass bg-green-600/80 text-green-50 border-green-500/50"
                        : product.tagType === "new" ? "glass bg-violet-500/50 text-violet-50 border-violet-500/50"
                        : "glass bg-gray-500/50 text-gray-50 border-gray-500/50"
                  }`}
                >
                  {product.tag}
                </span>
              </div>
              <div className="card-body -mt-4 p-8 pt-0 grow flex flex-col">
                <h3 className="card-title text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-base font-light text-gray-300 leading-tight mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-auto">
                    <p className="flex items-baseline text-3xl font-black text-white">${product.price}
                        <span className="text-sm font-normal text-gray-300 block opacity-70">/{product.period}</span>
                    </p>
                    <ul className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                        <li className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                        <FaCheck className="text-violet-500 shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                        </li>
                    ))}
                    </ul>
                    <div className="card-actions justify-center mt-8">
                    <button className="w-full py-4 bg-linear-to-tl from-violet-600 to-indigo-600 text-white text-xs uppercase rounded-2xl font-black tracking-widest shadow-xl shadow-violet-900/20 hover:scale-101 active:scale-95 transition-all">
                        Buy Now
                    </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
