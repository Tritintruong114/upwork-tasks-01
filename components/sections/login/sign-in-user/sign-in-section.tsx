import Loading from "@/components/elements/Loading";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SignInBrands from "./components/sign-in-brands";
import SignInContent from "./components/sign-in-content";
import SignInForm from "./components/sign-in-form";
import SignInNavbar from "./components/sign-in-navbar";
import SignInSuccess from "./components/sign-in-success";

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
const SignInSection = () => {
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

  const onLogin = () => {
    setSubmitSuccess(false);
    setSignUpWithEmail(false);
  };
  const onToggleOptions = () => {
    setLoading((prev) => !prev);
  };

  const dataForm = {
    onSubmit,
    setseeOptions,
    onToggleOptions,
    seeOptions,
    setSeeTips,
    seeTips,
    seeEnrich,
    setSeeEnrich,
    setSeeTailor,
    seeTailor,
    loadingSubmit,
  };

  return (
    <div className="relative py-12 sm:w-3/5 h-screen sm:h-full bg-white flex justify-center items-center sm:rounded-l-2xl overflow-hidden">
      <SignInNavbar />
      <div className="flex flex-col h-full overflow-scroll items-center sm:justify-center">
        <SignInContent />
        {signUpWithEmail && (
          <>
            {loading && !submitSuccess ? (
              <Loading />
            ) : (
              <>
                {submitSuccess ? (
                  <SignInSuccess onLogin={onLogin} formData={formData} />
                ) : (
                  <SignInForm {...dataForm} />
                )}
              </>
            )}
          </>
        )}
        {/* Sign in with Google Microsoft */}
        {!signUpWithEmail && (
          <SignInBrands onSigUpWithEmail={onSigUpWithEmail} />
        )}
      </div>
    </div>
  );
};

export default SignInSection;
