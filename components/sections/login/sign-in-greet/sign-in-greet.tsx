import Image from "next/image";

const SignInGreet = () => {
  return (
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
  );
};

export default SignInGreet;
