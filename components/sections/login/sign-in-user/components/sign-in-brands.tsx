import Image from "next/image";

const SignInBrands = ({
  onSigUpWithEmail,
}: {
  onSigUpWithEmail: () => void;
}) => {
  return (
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
        onClick={() => onSigUpWithEmail()}
        className="bg-black font-semibold rounded-[10px] w-[260px] max-w-[100%] px-[16px] py-[10px] text-white text-sm hover:bg-black/70 duration-300 cursor-pointer"
      >
        Sign up with Email
      </button>
    </div>
  );
};

export default SignInBrands;
