import React, { use, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Cart from "../Cart/page";
import { toast } from "react-toastify";

const page = ({ productDataPromise, activeTab, setActiveTab, carts, setCarts }) => {
  const productData = use(productDataPromise);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = carts.some((cart) => cart.id === product.id);
    if(isAlreadyInCart) {
      toast.success(`Already added ${product.name} to cart!`);
      setCarts(carts.map(item => 
        item.id === product.id ?
        {...item, quantity: item.quantity + 1} : 
        item
      ))
    }
    //no duplicate, then it will set to quantity 1
    else{
      toast.success(`${product.name} added to cart!`);
      setCarts([...carts, {...product, quantity: 1}]);
    }
  };

  const showProductCard = (product) => (
    <div className="glass card w-full h-full flex flex-col bg-black text-white/80 shadow-[2px_10px_30px_rgba(0,0,0,0.4)] rounded-3xl">
      <div className="card-body p-6 flex flex-row justify-between items-center gap-2">
        <img className="w-16 h-12 object-contain" src={product.icon} alt={product.name} />
        <span className={`badge px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider ${
            product.tagType === "popular"
              ? "glass bg-amber-500/80 text-amber-50 border-amber-500/50"
              : product.tagType === "best seller"
              ? "glass bg-green-600/80 text-green-50 border-green-500/50"
              : product.tagType === "new"
              ? "glass bg-violet-500/50 text-violet-50 border-violet-500/50"
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
        <p className="text-base font-light text-gray-300 leading-tight mb-4 line-clamp-3">{product.description}</p>
        <div className="mt-auto">
          <p className="flex items-baseline text-3xl font-black text-white">${product.price}
            <span className="text-sm font-normal text-gray-300 block opacity-70">/{product.period}</span>
          </p>
          <ul className="mt-6 space-y-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                <FaCheck className="text-violet-500 shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="card-actions justify-center mt-8">
            <button onClick={() => handleAddToCart(product)}
              className="w-full py-4 bg-linear-to-tl from-violet-600 to-indigo-600 text-white text-base uppercase rounded-2xl font-bold tracking-widest shadow-xl shadow-violet-900/20 cursor-pointer transition-all"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const handleRemoveFromCart = (index) => {
    toast.warn(`${carts[index].name} removed from cart.`);
    const newCarts = [...carts]
    newCarts.splice(index, 1);
    setCarts(newCarts);
  };

  return (
    <div className="pt-20 mb-20 px-6">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Premium Digital Tools
        </h1>
        <p className="max-w-2xl font-medium text-gray-500 text-lg md:text-xl leading-relaxed opacity-85">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center gap-2 mt-12 p-1.5 bg-gray-100 rounded-full border border-gray-200 shadow-xs">
          <button
            onClick={() => setActiveTab("Products")}
            className={`px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer ${
              activeTab === "Products"
                ? "bg-linear-to-tl from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-200"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("Cart")}
            className={`px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer ${
              activeTab === "Cart"
                ? "bg-linear-to-tl from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-200"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Cart ({carts.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </div>

      {activeTab === "Products" && (
        <>
          {/*2 carousels hidden on large devices)*/}
          <div className="flex flex-col gap-6 lg:hidden w-full">
            <div className="carousel carousel-center w-full space-x-3 px-2 pb-6">
              {productData.slice(0, Math.ceil(productData.length / 2)).map((product) => (
                <div key={product.id} className="carousel-item w-[94%] sm:w-[80%] md:w-[70%]">
                  {showProductCard(product)}
                </div>
              ))}
            </div>
            <div className="carousel carousel-center w-full space-x-3 px-2 pb-6">
              {productData.slice(Math.ceil(productData.length / 2)).map((product) => (
                <div key={product.id} className="carousel-item w-[94%] sm:w-[80%] md:w-[70%]">
                  {showProductCard(product)}
                </div>
              ))}
            </div>
          </div>

          {/* 3 column grid hidden on mobile/tablet */}
          <div className="hidden lg:grid w-full mx-auto grid-cols-3 gap-8 px-4">
            {productData.map((product) => (
              <div key={product.id} className="w-full h-full">
                {showProductCard(product)}
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "Cart" && (
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
          <Cart 
            carts={carts} 
            setCarts={setCarts}
            onRemove={handleRemoveFromCart}
            onBack={() => setActiveTab("Products")}
          />
        </div>
      )}
    </div>
  );
};

export default page;
