'use client';

import { useForm } from "react-hook-form";

export default function SignupPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Signup successful (demo)");
  };

  return (
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Sign Up
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          {...register("username")}
          placeholder="Username"
          className="border p-2 w-full"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="border p-2 w-full"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-red-500 text-white w-full py-2 rounded"
        >
          Sign Up
        </button>

      </form>

    </div>
  );
}