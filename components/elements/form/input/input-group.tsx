import ErrorIcon from "@/public/icons/error-icon";

const InputGroup = (props: any) => {
  const { errors, register } = props;
  return (
    <>
      <div className="mb-[13px]">
        <input
          className="border border-solid w-[260px] text-[16px] border-black/40 py-[6px] px-[8px] flex rounded"
          placeholder="Email"
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
          aria-invalid={errors.password ? "true" : "false"}
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
    </>
  );
};

export default InputGroup;
