import Image from "next/image";
import Link from "next/link";

const SignInContent = () => {
  return (
    <div className="flex justify-center items-center flex-col">
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
          Get better data with conversational forms, surveys, quizzes & more.
        </h2>
      </div>
    </div>
  );
};

export default SignInContent;
