import React, { useState } from "react";
import { Link } from "@mui/material";
import Head from "next/head";
import useAuth from "../hooks/useAuth";
import PlanBenefits from "./PlanBenefits";
import Table from "./Table";
import Loader from "./Loader";
const Plans = ({ products }) => {
  const { logout } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(products[2]);
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix-favicon.png" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>

        <button className="text-lg font-light hover:underline" onClick={logout}>
          Sign out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <PlanBenefits text="Watch all you want. Ad-free." />
          <PlanBenefits text="Recommendations just for you." />
          <PlanBenefits text="Change or cancel your plan anytime." />
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`planBox ${
                  selectedPlan.id === product.id ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && "opacity-60"
            }`}
            // onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="text-gray-300" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
