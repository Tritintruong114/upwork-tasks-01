type SignInSuccessTypes = {
  onLogin: () => void;
  formData: any;
};

const SignInSuccess = ({ formData, onLogin }: SignInSuccessTypes) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl mb-[12px]">Sign up Success !</p>
      <p className="font-light w-1/2 text-center mb-[12px]">
        Check your email : <span className="font-bold">{formData?.mail}</span>{" "}
        and click the confirmation to log in.
      </p>
      <button
        onClick={() => {
          onLogin();
        }}
        className="bg-black font-semibold rounded-[10px] w-[260px] max-w-[100%] px-[16px] py-[10px] text-white text-sm hover:bg-black/70 duration-300 cursor-pointer"
      >
        Log in
      </button>
    </div>
  );
};

export default SignInSuccess;
