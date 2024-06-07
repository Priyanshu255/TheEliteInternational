import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../components/TextField";

const OTPpage = () => {
  const navigate = useNavigate();
  //   const email = localStorage.getItem('email');
  //   console.log(email);
  const handleSubmit = async (values) => {
    const data = {
      email: localStorage.getItem("email"),
      code: values.otp.toString(),
    };
    // console.log(data);
    // useEffect(async () => {
    // .post("http://localhost:5001/api/verifyOTP", data)
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/verifyOTP`, data)
      .then((response) => {
        console.log("Response:", response.data);
        localStorage.setItem("token", response.data.token);
        toast.success(response.data?.msg);
        navigate('/');
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        if (error.response.data.msg) {
          toast.error(error.response.data.msg);
        } else {
          toast.error("Something went wrong");
        }
      });
    // }, []);
  };
  const validate = Yup.object({
    otp: Yup.number().required("Required"),
  });
  return (
    <Formik
      initialValues={{
        otp: "",
      }}
      validationSchema={validate}
      onSubmit={async (values, formik) => {
        console.log(values);
        handleSubmit(values);
        // toast("hi");
        formik.resetForm();
        // navigate("/verifyotp");
      }}
    >
      {(formik) => (
        <Form className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
          <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl">
                  <p>Email Verification</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>Enter 6 digit code sent to your email.</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-16 ">
                      <Field
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name="otp"
                        id="otp"
                        placeholder="XXXXXX"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        type="submit"
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OTPpage;
