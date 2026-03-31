import "./App.css";
import Navbar from "./components/Navbar/page";
import Banner from "./components/Banner/page";
import UserCounts from "./components/UserCounts/page";
import Tools from "./components/Tools/page";
import Steps from "./components/Steps/page";
import PricingOption from "./components/PricingOption/page";
import Workflow from "./components/Workflow/page";
import Footer from "./components/Footer/page";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// call pricingData
const getPricingData = async () => {
  const res = await fetch("/aiPricingData.json");
  return res.json();
};

// call stepData
const stepData = async () => {
  const res = await fetch("/stepsData.json");
  return res.json();
};

// call pricingPlansData
const pricingData = async () => {
  const res = await fetch("/pricingPlansData.json");
  return res.json();
};

const productDataPromise = getPricingData();
const stepDataPromise = stepData();
const pricingPlansPromise = pricingData();

//fetching promises outside the component and 
//the child component read with use() suspend. 
//if const create in the outside of return then have to use suspense method
function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar
        cartCount={carts.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setActiveTab("Cart")}
      />

      {activeTab === "Products" ? (
        <>
          <div className="w-[94%] md:w-[85%] lg:w-[80%] mx-auto overflow-hidden">
            <Banner />
          </div>
          <UserCounts />
          <div id="Products" className="w-[94%] md:w-[85%] lg:w-[80%] mx-auto">
            <Tools
              productDataPromise={productDataPromise}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              carts={carts}
              setCarts={setCarts}
            />
          </div>
          <div id="Features" className="w-[94%] md:w-[85%] lg:w-[80%] mx-auto">
            <Steps stepDataPromise={stepDataPromise} />
          </div>
          <div id="Pricing" className="w-[94%] md:w-[85%] lg:w-[80%] mx-auto">
            <PricingOption pricingPlansPromise={pricingPlansPromise} />
          </div>
          <Workflow />
        </>
      ) : (
        <div className="w-[94%] md:w-[85%] lg:w-[80%] mx-auto min-h-screen pt-10">
          <Tools
            productDataPromise={productDataPromise}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            carts={carts}
            setCarts={setCarts}
          />
        </div>
      )}

      <div id="FAQ">
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={1000} theme="dark" />
    </>
  );
}

export default App;
