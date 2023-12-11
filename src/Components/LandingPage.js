function Landingpage() {
    return (
      <div className="">
        <img src="/landing.png" className="max-w-3xl h-auto mx-auto my-10" />
        <div className="text-5xl text-gray-800 font-semibold flex justify-center">
          Invest in everything
        </div>
        <div className="text-xl text-gray-600  flex justify-center my-8">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-sm hover:bg-gray-900 ">
            Sign Up now
          </button>
        </div>
        <img
          src="/largest-broker.svg"
          className="max-w-3xl h-auto mx-auto my-10"
        />
        <img src="/ecosystem.png" className="max-w-3xl h-auto mx-auto my-10" />
        <div className="text-3xl text-gray-800 font-semibold flex justify-center">
          Open a Pluto account
        </div>
        <div className="text-lg text-gray-600  flex justify-center my-8">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
          trades.
        </div>
        <div className="flex justify-center mb-20">
          <button className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-sm hover:bg-gray-900 ">
            Sign Up now
          </button>
        </div>
      </div>
    );
  }
  
  export default Landingpage;
  