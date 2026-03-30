import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify';

const page = ({carts, onRemove, onBack, setCarts}) => {
  const totalPrice = carts.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePayment = () => {
    setCarts([]);
    toast("Your Product is now processing");
  }

  const handleRemove = (item, index) => {
    // parent will manage the removal and synced with navbaar & cart
    // toast.warn(`${item.name} removed from cart`);
    // const filteredCarts = carts.filter((cart) => cart.id !== item.id);
    // setCarts(filteredCarts);
    onRemove(index);
  }
  return (
    <div>
      {carts.length === 0 ? (
        <div className="w-[80%] mx-auto py-30 text-center bg-linear-to-tl from-indigo-400 to-violet-400 rounded-[3rem] border-2 border-dashed border-gray-200">
          <h2 className="text-4xl font-bold text-gray-50 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-200/90 text-lg mb-6 max-w-xl mx-auto">Looks like you haven't added any premium tools to your cart yet.</p>
          <button onClick={onBack} 
          className="px-8 py-3 bg-linear-to-tl from-violet-600 to-indigo-600 text-xl text-white rounded-full font-semibold shadow-lg cursor-pointer">
            Browse Products
          </button>
        </div>
      ) : (
        <div>
          <div className="w-[80%] mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Cart</h2>

            <div className="space-y-4 mb-6">
              {carts.map((item, index)=>(
                <div key={index} className="flex items-center justify-between bg-gray-300 rounded-2xl shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center gap-4">
                    <img src={item.icon} alt={item.name} className="w-15 h-15 bg-black glass rounded-2xl object-contain" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-500 text-lg font-normal">
                        ${item.price}
                        {item.quantity>1 && <span className="text-gray-500 text-lg font-normal"> x {item.quantity}</span>}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item, index)} className="text-rose-500 hover:text-rose-600 font-semibold">
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="fle justify-between items-center border-t pt-6 mb-6">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>

            <button onClick={handlePayment} className="w-full py-4 bg-linear-to-tl from-violet-600 to-indigo-600 text-xl text-white rounded-full font-semibold shadow-lg shadow-violet-100 cursor-pointer">
              Proceed to Checkout
            </button>
          </div>      
        </div>
      )}
    </div>
  )
}

export default page