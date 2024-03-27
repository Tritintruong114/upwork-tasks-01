"use client";
import Loading from "@/components/elements/Loading";
import ArrowIcon from "@/public/icons/arrow-down";
import EarthIcon from "@/public/icons/earth";
import ErrorIcon from "@/public/icons/error-icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  mail: string;
  password: string;
  policy: boolean;
  tips: boolean;
  tailor: boolean;
  enrich: boolean;
};

export default function Home() {
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seeOptions, setseeOptions] = useState(false);
  const [seeTips, setSeeTips] = useState(false);
  const [seeTailor, setSeeTailor] = useState(false);
  const [seeEnrich, setSeeEnrich] = useState(false);
  const [formData, setFormData] = useState<Inputs>();

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSigUpWithEmail = () => {
    setLoading(true);
    setSignUpWithEmail(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData(data);
    setLoadingSubmit(true);
    setInterval(() => {
      reset();
      setLoadingSubmit(false);
      setSubmitSuccess(true);
    }, 3000);
  };

  return (
    <section className="sm:h-screen font-apercu">
      <div className="sm:h-full bg-black flex justify-center items-center w-screen">
        <div className="hidden font-light relative h-full w-1/2 sm:flex items-center justify-center bg-black flex-col">
          <div className="flex justify-center items-center h-full w-full flex-col">
            <h1 className="text-[36px] text-white text-center mb-[32px]">
              Sign up
              <br />
              and come on in
            </h1>
            <Image
              src="/loginstatic.jpeg"
              alt="Login Static Image"
              width={420}
              height={350}
              className="rounded-xl"
            />
          </div>
          <span className="absolute text-white bottom-[10%] text-[12px]">
            © Typeform
          </span>
        </div>
        <div className="relative py-12 sm:w-3/5 h-full bg-white flex justify-center items-center sm:rounded-l-2xl overflow-hidden">
          <div className="absolute py-[8px] px-[24px] top-0 w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <EarthIcon />
              <span className="text-[12px] text-black/60">English</span>
              <ArrowIcon />
            </div>
            <div className="flex items-center">
              <span className="text-[14px] font-light mr-[8px]">
                Already have an account?
              </span>
              <button className="text-[12px] py-[3px] px-[10px] border border-solid rounded-[6px] border-black">
                Log in
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-[80px] flex items-center justify-center">
              <Link href="/">
                <Image
                  src="/typeformicon.png"
                  alt="Typeform Icon Image"
                  width={150}
                  height={60}
                />
              </Link>
            </div>
            <div className="sm:w-4/5 w-3/5">
              <h2 className="text-[22px] mb-[20px] text-black/90 font-extralight text-center">
                Get better data with conversational forms, surveys, quizzes &
                more.
              </h2>
            </div>
            {signUpWithEmail ? (
              <>
                {loading && !submitSuccess ? (
                  <Loading />
                ) : (
                  <>
                    {submitSuccess ? (
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl mb-[12px]">Sign up Success !</p>
                        <p className="font-light w-1/2 text-center mb-[12px]">
                          Check your email :{" "}
                          <span className="font-bold">{formData?.mail}</span>{" "}
                          and click the confirmation to log in.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitSuccess(false);
                            setSignUpWithEmail(false);
                          }}
                          className="bg-black font-semibold rounded-[10px] w-[260px] max-w-[100%] px-[16px] py-[10px] text-white text-sm hover:bg-black/70 duration-300 cursor-pointer"
                        >
                          Log in
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col duration-300 w-3/5 sm:w-1/3 items-center justify-center"
                      >
                        <div className="flex duration-300 flex-col">
                          <div className="">
                            <div className="mb-[13px]">
                              <input
                                className="border border-solid w-[260px] text-[16px] border-black/40 py-[6px] px-[8px] flex rounded"
                                placeholder="Email"
                                // {...register("mail", {
                                //   required: "Email Address is required",
                                // })}
                                {...register("mail", {
                                  required: "This field cannot be left blank",
                                })}
                                autoComplete="no"
                                aria-invalid={errors.mail ? "true" : "false"}
                              />
                              {errors.mail && (
                                <p
                                  role="alert"
                                  className="px-[8px] items-center relative flex text-[12px] text-red-500"
                                >
                                  <ErrorIcon />
                                  {errors.mail.message}
                                </p>
                              )}
                            </div>
                            <div>
                              <input
                                className="border border-solid w-[260px] text-[16px] border-black/40 py-[6px] px-[8px] flex rounded"
                                placeholder="Password"
                                type="password"
                                // })}
                                {...register("password", {
                                  required: "This field cannot be left blank",
                                })}
                                aria-invalid={
                                  errors.password ? "true" : "false"
                                }
                              />
                              {errors.password && (
                                <p
                                  role="alert"
                                  className="px-[8px] items-center relative flex text-[12px] text-red-500"
                                >
                                  <ErrorIcon />
                                  {errors.password.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="w-[260px] duration-300 flex relative items-start mt-[15px] text-start">
                          <div>
                            <input
                              type="checkbox"
                              height="20"
                              width="20"
                              className="rounded-[3px] accent-black absolute duration-300 w-[20px] h-[20px]"
                              {...register("policy", {
                                required: "Please accept the terms",
                              })}
                              aria-invalid={errors.policy ? "true" : "false"}
                            />

                            <p className="text-[14px] ml-[28px] leading-1 mb-[12px]">
                              I agree to Typeform’s{" "}
                              <Link
                                className="underline-offset-1 underline"
                                href="https://www.typeform.com/terms-service/?tid=0953d55d-641f-44b7-b089-c1a87e68838e"
                              >
                                Terms of Service
                              </Link>
                              ,
                              <Link
                                className="underline-offset-1 underline mr-1"
                                href="https://www.typeform.com/terms-service/?tid=0953d55d-641f-44b7-b089-c1a87e68838e"
                              >
                                {" "}
                                Privacy Policy
                              </Link>
                              and
                              <Link
                                className="underline-offset-1 underline mx-1"
                                href="https://www.typeform.com/terms-service/?tid=0953d55d-641f-44b7-b089-c1a87e68838e"
                              >
                                Data Processing Agreement.
                              </Link>
                            </p>
                            {errors.policy && (
                              <p
                                role="alert"
                                className="px-[8px] items-center relative flex text-[12px] text-red-500"
                              >
                                <ErrorIcon />
                                {errors?.policy?.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div
                          className={`pl-[30px] overflow-hidden pb-[15px] pt-[8px] duration-300`}
                        >
                          <button
                            onClick={() => setseeOptions((prev) => !prev)}
                            className="flex  justify-between w-full items-center"
                          >
                            <span className="text-[14px]">See options</span>
                            <div
                              className={`${
                                seeOptions ? "rotate-180" : "rotate-0"
                              } duration-300`}
                            >
                              <ArrowIcon />
                            </div>
                          </button>

                          <div
                            className={`flex  flex-col overflow-hidden mt-3 max-h-[0px] duration-300 transition-all ${
                              seeOptions ? "max-h-[450px]" : ""
                            }`}
                          >
                            {/* Group */}
                            <div className="flex flex-col text-[14px]">
                              <span className="mb-3">
                                Get useful tips, inspiration, and offers via
                                e-communication.
                              </span>
                              <div className="flex gap-6 mb-[15px]">
                                <label
                                  htmlFor="Yes"
                                  onClick={() => setSeeTips(true)}
                                  className="inline-flex items-center cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    id="Yes"
                                    checked={seeTips}
                                    style={{
                                      borderRadius: "50%",
                                      appearance: "none",
                                      height: "20px",
                                      width: "20px",
                                    }}
                                    {...register("tips")}
                                    className={`rounded-[50%]  border accent-black ${
                                      seeTips === true &&
                                      "checked:enabled:border-[6px]"
                                    } border-black`}
                                  />
                                  <div className="ml-1">
                                    <span>Yes</span>
                                  </div>
                                </label>
                                <label
                                  htmlFor="no"
                                  onClick={() => setSeeTips(false)}
                                  className="inline-flex items-center cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    id="no"
                                    checked={!seeTips}
                                    style={{
                                      borderRadius: "50%",
                                      appearance: "none",
                                      height: "20px",
                                      width: "20px",
                                    }}
                                    {...register("tips")}
                                    className={`rounded-[50%]  border accent-black ${
                                      seeTips === false &&
                                      "checked:enabled:border-[6px]"
                                    } border-black`}
                                  />
                                  <div className="ml-1">
                                    <span>No</span>
                                  </div>
                                </label>
                              </div>
                            </div>

                            {/* Group 2 */}
                            <div className="flex flex-col text-[14px]">
                              <span className="mb-3">
                                Tailor Typeform to my needs based on my
                                activity.See Privacy Policy
                              </span>
                              <div className="flex gap-6 mb-[15px]">
                                <label
                                  htmlFor="tailorYes"
                                  className="inline-flex items-center cursor-pointer"
                                  onClick={() => setSeeTailor(true)}
                                >
                                  <input
                                    type="checkbox"
                                    id="tailorYes"
                                    checked={seeTailor}
                                    {...register("tailor")}
                                    style={{
                                      borderRadius: "50%",
                                      appearance: "none",
                                      height: "20px",
                                      width: "20px",
                                    }}
                                    className={`rounded-[50%]  border accent-black ${
                                      seeTailor === true &&
                                      "checked:enabled:border-[6px]"
                                    } border-black`}
                                  />
                                  <div className="ml-1">
                                    <span>Yes</span>
                                  </div>
                                </label>
                                <label
                                  htmlFor="tailorNo"
                                  className="inline-flex items-center cursor-pointer"
                                  onClick={() => setSeeTailor(false)}
                                >
                                  <input
                                    type="checkbox"
                                    id="tailorNo"
                                    checked={!seeTailor}
                                    style={{
                                      borderRadius: "50%",
                                      appearance: "none",
                                      height: "20px",
                                      width: "20px",
                                    }}
                                    {...register("tailor")}
                                    className={`rounded-[50%]  border accent-black ${
                                      seeTailor === false &&
                                      "checked:enabled:border-[6px]"
                                    } border-black`}
                                  />
                                  <div className="ml-1">
                                    <span>No</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            {/* Group 3 */}
                            <div className="flex flex-col text-[14px]">
                              <span className="mb-3">
                                Enrich my data with select third parties for
                                more relevant content.See Privacy Policy
                              </span>
                              <div className="flex gap-6 mb-[15px]">
                                <label
                                  htmlFor="enrichYes"
                                  className="inline-flex items-center cursor-pointer"
                                  onClick={() => setSeeEnrich(true)}
                                >
                                  <input
                                    type="checkbox"
                                    id="enrichYes"
                                    {...register("enrich")}
                                    checked={seeEnrich}
                                    style={{
                                      borderRadius: "50%",
                                      appearance: "none",
                                      height: "20px",
                                      width: "20px",
                                    }}
                                    className={`rounded-[50%]  border accent-black ${
                                      seeEnrich === true &&
                                      "checked:enabled:border-[6px]"
                                    } border-black`}
                                  />
                                  <div className="ml-1">
                                    <span>Yes</span>
                                  </div>
                                </label>
                                <label
                                  htmlFor="enrichnNo"
                                  className="inline-flex items-center cursor-pointer"
                                  onClick={() => setSeeEnrich(false)}
                                >
                                  <input
                                    {...register("enrich")}
                                    type="checkbox"
                                    id="enrichnNo"
                                    checked={!seeEnrich}
                                    style={{
                                      borderRadius: "50%",
                                      appearance: "none",
                                      height: "20px",
                                      width: "20px",
                                    }}
                                    className={`rounded-[50%]  border accent-black ${
                                      seeEnrich === false &&
                                      "checked:enabled:border-[6px]"
                                    } border-black`}
                                  />
                                  <div className="ml-1">
                                    <span>No</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            {/* Finish Group */}
                            <span className="text-[14px] text-black/60">
                              You can update your preferences in your Profile at
                              any time
                            </span>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="bg-black duration-300 flex justify-center items-center w-[260px] text-[15px] py-2 rounded text-white text-center"
                        >
                          {loadingSubmit ? (
                            <Loading />
                          ) : (
                            "Create my free account"
                          )}
                        </button>
                      </form>
                    )}
                  </>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <button className="flex mb-[15px] items-center font-semibold relative text-sm w-[260px] max-w-[100%] justify-center px-[16px] py-[10px] border border-solid rounded-[10px] border-black">
                  <Image
                    src="/googleicon1.png"
                    alt="Google Icon Image"
                    width={20}
                    height={20}
                    className="absolute left-[10px]"
                  />
                  Sign up with Google
                </button>
                <button className="flex items-center font-semibold relative text-sm w-[260px] max-w-[100%] justify-center px-[16px] py-[10px] border border-solid rounded-[10px] border-black">
                  <Image
                    src="/microsoft.png"
                    alt="Google Icon Image"
                    width={20}
                    height={20}
                    className="absolute left-[10px]"
                  />
                  Sign up with Microsoft
                </button>
                <span className="my-[15px] leading-none uppercase text-[14px] font-extralight">
                  or
                </span>
                <button
                  onClick={onSigUpWithEmail}
                  className="bg-black font-semibold rounded-[10px] w-[260px] max-w-[100%] px-[16px] py-[10px] text-white text-sm hover:bg-black/70 duration-300 cursor-pointer"
                >
                  Sign up with Email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
