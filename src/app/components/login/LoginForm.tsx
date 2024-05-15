"use client";
import { loginRequest } from "../../login/apiService";
import { useUserStore } from "../../store/userStore";
import { Formik, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const router = useRouter();
  const { handleUser, user } = useUserStore();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setErrors,
  } = useFormik<IFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      const data = await loginRequest(values.email, values.password);
      if (data.error != undefined) {
        setErrors({ email: "Incorrect user credentials" });
      } else {
        handleUser(data.user);
        router.push("/");
      }
      setSubmitting(false);
    },
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="mb-10">
        <h3 className="text-3xl font-extrabold">Sign in</h3>
        <p className="text-sm mt-4">
          Sign in to your account and explore a world of possibilities. Your
          journey begins here.
        </p>
      </div>
      <div>
        <label className="text-sm mb-2 block">User email</label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="email"
            required
            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-4"
            viewBox="0 0 24 24"
          >
            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
        {errors.email && touched.email && errors.email}
      </div>
      <div>
        <label className="text-sm mb-2 block">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={isPasswordShown ? "text" : "password"}
            required
            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
            placeholder="Enter password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
            onClick={() => setIsPasswordShown(!isPasswordShown)}
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
        {errors.password && touched.password && errors.password}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-3 block text-sm">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a
            href="jajvascript:void(0);"
            className="text-blue-600 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <div className="!mt-10">
        <button
          className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none"
          disabled={isSubmitting}
        >
          Log in
        </button>
      </div>
      <p className="text-sm !mt-10 text-center">
        Don't have an account{" "}
        <Link
          href="/signup"
          className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
        >
          Register here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
