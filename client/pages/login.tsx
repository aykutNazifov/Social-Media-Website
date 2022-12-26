import React, { useContext, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { axiosRequest } from "../utils/axios";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required Field"),
  password: yup
    .string()
    .min(6, "Must be 6 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required field"),
});

const Login = () => {
  const { user, login } = useContext(AuthContext);

  const [error, setError] = useState("");
  const router = useRouter();

  const loginUser = async (data) => {
    try {
      const userData = await axiosRequest.post("/auth/login", data, {
        withCredentials: true,
      });

      login(userData.data);

      router.push("/");
    } catch (error) {
      console.log(error);
      setError("Sometging went wrong!");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      loginUser(values);
      resetForm();
    },
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#74ebd5]">
      <div className="w-full max-w-[780px] bg-[#000] text-white shadow-2xl rounded-2xl overflow-hidden flex">
        <div className="w-1/2 h-auto relative">
          <Image
            src="/images/login-img.jpeg"
            alt="Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 px-[67px] py-[57px] pb-[65px]">
          <h1 className="text-2xl mb-9"> Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-[55px] border-b border-solid border-[rgba(255, 255, 255, 0.2)] flex flex-col-reverse relative">
              <input
                className="px-[5px] text-[#ccc] bg-transparent border-none outline-none w-full "
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email ? (
                <p className="absolute -bottom-[35px] left-0 text-red-600">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="mb-[55px] border-b border-solid border-[rgba(255, 255, 255, 0.2)] flex flex-col-reverse relative">
              <input
                className="px-[5px] text-[#ccc] bg-transparent border-none outline-none w-full "
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="absolute -bottom-[35px] left-0 text-red-600">
                  {formik.errors.password}
                </p>
              ) : null}{" "}
            </div>

            <button
              className="mb-10 w-full bg-[#ff4500] rounded-2xl py-[13px] text-[18px] border border-solid border-[#ff4500] outline-none cursor-pointer text-white"
              type="submit"
            >
              Log In
            </button>

            {error && <p className="my-[15px] text-red-500">{error}</p>}
            <span className="text-[14px]">
              Dont have account yet{" "}
              <Link href="/register">
                <p className="text-blue-600">go to Register page!</p>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
