import React from "react";
import PaymentCard from "../components/PaymentCard";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "500",
      teleSupport: "1 month"
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "450",
      teleSupport: "6 month"
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "350",
      teleSupport: "1 year"
    },
  ];

  return (
    <div className="px-5 md:px-24 pb-10 text-center bg-gray-200">
      <div className="flex flex-col justify-center items-center">
      <h1 className="py-10 text-3xl font-bold">Plans & Pricing</h1>
      <h3 className="mb-4 font-semibold max-w-3xl">
        Professional, institutional-grade, high-quality, accurate, reliable,
        trustworthy, actionable real-time premium trading signals and analysis.
      </h3>

      <h3 className="mb-10 font-semibold max-w-3xl">
        Choose a billing plan that suits you and start your <b>7 Day Trial </b>
         now. You can cancel or upgrade your plan in Trial period.
      </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-10">
      {plans.map((plan) => (
        <PaymentCard key={plan.id} plan={plan} />
      ))}
      </div>
    </div>
    // plans.map(plan => (
    //   <PaymentCard key={plan.id} plan={plan} />
    // ))
  );
};

export default Pricing;
