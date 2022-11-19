import { Link } from "@mui/material";
import Head from "next/head";
import React from "react";
import useAuth from "../hooks/useAuth";
import PlanBenefits from "./PlanBenefits";

const Plans = () => {
  const { logout } = useAuth();

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

      <main className="max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
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
            <div className="planBox">Standard</div>
            <div className="planBox">Standard</div>
            <div className="planBox">Standard</div>
          </div>

          {/* <Table/> */}

          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
