import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative h-screen flex flex-col bg-black md:items-center md:justify-center md:bg-transparent px-3">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix-favicon.png" />
      </Head>

      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://rb.gy/ulxxee"
        width={165}
        height={165}
        className="absolute left-6 top-6 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", {required: true})}
            />
            {errors.email && <p className="p-1 text-[13px] text-orange-500">Please enter a valid email.</p>}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", {required: true})}
            />
            {errors.password && <p className="p-1 text-[13px] text-orange-500">Your password must contain between 4 and 60 characters.</p>}
          </label>
        </div>

        <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
          Sign in
        </button>

        <div className="text-[gray]">
          New to Netflix?{"  "}
          <button type="submit" className="text-white hover:underline">
            Sign up now<span className="text-[gray]">.</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
