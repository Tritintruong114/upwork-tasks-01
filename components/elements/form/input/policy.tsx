import ErrorIcon from "@/public/icons/error-icon";
import Link from "next/link";

const Policy = (props: any) => {
  const { register, error } = props;
  return (
    <div>
      <input
        type="checkbox"
        height="20"
        width="20"
        className="rounded-[3px] accent-black absolute duration-300 w-[20px] h-[20px]"
        {...register("policy", {
          required: "Please accept the terms",
        })}
        aria-invalid={error ? "true" : "false"}
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
      {error && (
        <p
          role="alert"
          className="px-[8px] items-center relative flex text-[12px] text-red-500"
        >
          <ErrorIcon />
          {error}
        </p>
      )}
    </div>
  );
};

export default Policy;
