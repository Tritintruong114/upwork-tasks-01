import InputGroup from "@/components/elements/form/input/input-group";
import Options from "@/components/elements/form/input/options";
import Policy from "@/components/elements/form/input/policy";
import Loading from "@/components/elements/Loading";
import { useForm } from "react-hook-form";

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

const SignInForm = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { onSubmit, loadingSubmit } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col duration-300 w-3/5 sm:w-1/3 items-center justify-center"
    >
      <div className="flex duration-300 flex-col">
        <div className="">
          <InputGroup register={register} errors={errors} />
        </div>
      </div>
      <div className="w-[260px] duration-300 flex relative items-start mt-[15px] text-start">
        <Policy register={register} error={errors?.policy?.message || ""} />
      </div>
      <Options {...props} register={register} />
      <button
        type="submit"
        className="bg-black duration-300 flex justify-center items-center w-[260px] text-[15px] py-2 rounded text-white text-center"
      >
        {loadingSubmit ? <Loading /> : "Create my free account"}
      </button>
    </form>
  );
};

export default SignInForm;
