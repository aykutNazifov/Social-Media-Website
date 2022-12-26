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
  username: yup
    .string()
    .min(3, "Must be 3 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required field"),
  email: yup.string().email("Invalid email address").required("Required Field"),
  password: yup
    .string()
    .min(6, "Must be 6 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const Register = () => {
  const { user } = useContext(AuthContext);

  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      registerUser({
        username: values.username,
        email: values.email,
        password: values.password,
      });
      resetForm();
    },
  });

  const registerUser = async (data) => {
    try {
      await axiosRequest.post("/auth/register", data);

      router.push("/login");
    } catch (error) {
      console.log(error);
      setError("Something went wrong, try agian please!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#a18cd1]">
      <div className="w-full max-w-[780px] bg-[#000] text-white shadow-2xl rounded-2xl overflow-hidden flex">
        <div className="w-1/2 h-auto relative">
          <Image
            src="/images/formik-img.jpg"
            alt="Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 px-[67px] py-[57px] pb-[65px]">
          <h1 className="text-2xl mb-9"> Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-[55px] border-b border-solid border-[rgba(255, 255, 255, 0.2)] flex flex-col-reverse relative">
              <input
                className="px-[5px] text-[#ccc] bg-transparent border-none outline-none w-full "
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />

              {formik.touched.username && formik.errors.username ? (
                <p className="absolute -bottom-[35px] left-0 text-red-600">
                  {formik.errors.username}
                </p>
              ) : null}
            </div>

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
            <div className="mb-[55px] border-b border-solid border-[rgba(255, 255, 255, 0.2)] flex flex-col-reverse relative">
              <input
                className="px-[5px] text-[#ccc] bg-transparent border-none outline-none w-full "
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p className="absolute -bottom-[35px] left-0 text-red-600">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
            </div>

            <button
              className="mb-10 w-full bg-[#57b846] rounded-2xl py-[13px] text-[18px] border border-solid border-[#57b846] outline-none cursor-pointer text-white"
              type="submit"
            >
              Register
            </button>

            {error && <p className="my-[15px] text-red-500">{error}</p>}
            <span className="text-[14px]">
              Already have account,{" "}
              <Link href="/login">
                <p className="text-blue-600">go to Login page!</p>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
