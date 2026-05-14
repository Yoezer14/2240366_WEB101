'use client';

import { useForm } from "react-hook-form";

export default function LoginPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login successful (demo)");
  };

  return (
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Log In
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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
          Log In
        </button>

      </form>

    </div>
  );
}