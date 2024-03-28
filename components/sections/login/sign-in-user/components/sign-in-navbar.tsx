import ArrowIcon from "@/public/icons/arrow-down";
import EarthIcon from "@/public/icons/earth";

const SignInNavbar = () => {
  return (
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
  );
};

export default SignInNavbar;
