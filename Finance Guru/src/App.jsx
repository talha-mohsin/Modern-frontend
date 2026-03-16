import { useState } from "react";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials.jsx";
import LandingPageData from "./constant/webData.jsx";

function App() {
  const { header, hero, features, testimonials } = LandingPageData;
  const isLogin = true;
  //0
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [transactions, setTransactions] = useState([]);

  const amountTracker = () => {
    setTransactions([...transactions, { amount, type }]);

    amount("");
    type("income");
  };

  console.log("transactions ==>>", transactions);

  return (
    <div>
      <Header header={header} user={isLogin} />

      <div className="flex justify-center gap-1 items-center">
        <input
          onChange={(e) => setAmount(e.target.value)}
          className="border border-b-gray-950 p-1"
          placeholder="Amount"
        />
        <select
          onClick={(e) => setType(e.target.value)}
          name=""
          id=""
          className="border border-b-gray-950 p-1"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={amountTracker}
          className="border border-b-gray-950 p-1"
        >
          Submit
        </button>
      </div>

      <div>
        {transactions.map((data, i) => {
          return (
            <div key={i} className="flex justify-center gap-10 items-center">
              <h3 className={`font-bold text-2xl`}>
                {i + 1}
                {")"}
                {data.amount}
              </h3>
              <h3
                className={`font-bold text-2xl ${data.type === "expense" ? "text-red-500" : "text-green-500"}`}
              >
                {data.type}
              </h3>
            </div>
          );
        })}
      </div>

      <Hero hero={hero} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
    </div>
  );
}

export default App;
