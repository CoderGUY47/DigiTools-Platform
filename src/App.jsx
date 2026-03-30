import "./App.css";
import Navbar from "./components/Navbar/page";
import Banner from "./components/Banner/page";
import UserCounts from "./components/UserCounts/page";
import Tools from "./components/Tools/page";
import Steps from "./components/Steps/page";
import PricingOption from "./components/PricingOption/page";



const getPricingData = async () => {
  const res = await fetch("/aiPricingData.json");
  return res.json();
};

const stepData = async () => {
  const res = await fetch("/stepsData.json");
  return res.json();
};

const pricingData = async () => {
  const res = await fetch("/pricingPlansData.json");
  return res.json();
};

const productDataPromise = getPricingData();
const stepDataPromise = stepData();
const pricingPlansPromise = pricingData();

function App() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <Navbar />
        <Banner />
      </div>
      <UserCounts />
      <div className="w-[80%] mx-auto">
        <Tools productDataPromise={productDataPromise} />
        <Steps stepDataPromise={stepDataPromise} />
        <PricingOption pricingPlansPromise={pricingPlansPromise}></PricingOption> 
      </div>
    </>
  );
}

export default App;
