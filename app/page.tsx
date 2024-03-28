"use client";
import SignInGreet from "@/components/sections/login/sign-in-greet/sign-in-greet";
import SignInSection from "@/components/sections/login/sign-in-user/sign-in-section";

export default function Home() {
  return (
    <section className="sm:h-screen font-apercu">
      <div className="sm:h-full bg-black flex justify-center items-center w-screen">
        <SignInGreet />
        <SignInSection />
      </div>
    </section>
  );
}
