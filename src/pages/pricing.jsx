import Switch from "../components/UI/Switch/switch";
import { useState } from "react";
import BGSecondary from "../components/BGSecondary";
import NavSecondary from "../components/NavSecondary";

export default function Pricing() {
  const [pricing, setPricing] = useState();

  return (
    <>
      <NavSecondary
        title="PRICING"
        description="  Create a your stories, Photosnap is a platform for photographers and
     visual storytellers. It’s the simple way to create and share your
     photos."
        src="./images/pricing/hero.jpg"
        srcTablet="./images/pricing/tablet/hero.jpg"
        srcMobile="./images/pricing/mobile/hero.jpg"
        alt="hero"
      />

      <Switch pricing={pricing} setPricing={setPricing} />
      <section className="flex justify-center items-center gap-[30px]">
        <div className="flex flex-col items-center bg-cardBg my-20 px-10 gap-10 h-[407px]">
          <div className="flex flex-col mt-14 w-[270px]">
            <p className="text-h2 text-center">Basic</p>
            <p className="bg-body opacity-60 text-center mt-[18px]">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
          </div>
          <div className="">
            <p className="text-h1">{pricing ? "$190.00" : "$19.00"}</p>
            <p className="bg-body opacity-60 text-center">per month</p>
          </div>
          <button className="bg-pureBlack text-pureWhite text-h4 w-[270px] h-10 hover:bg-lightGrey hover:text-pureBlack">
            PICK PLAN
          </button>
        </div>
        <div className="flex flex-col relative items-center bg-pureBlack text-pureWhite my-[48px] px-10 gap-10 h-[470px]">
          <div className="absolute hidden desktop:block tablet:block w-full h-[6px] bg-gradient top-[0%]" />
          <div className="flex flex-col mt-[88px] w-[270px]">
            <p className="text-h2 text-center">Pro</p>
            <p className="bg-body opacity-60 text-center mt-[18px]">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
          </div>
          <div className="">
            <p className="text-h1">{pricing ? "$390.00" : "$39.00"}</p>
            <p className="bg-body opacity-60 text-center">per month</p>
          </div>
          <button className="bg-pureWhite text-pureBlack text-h4 w-[270px] h-10 hover:bg-lightGrey">
            PICK PLAN
          </button>
        </div>
        <div className="flex flex-col items-center bg-cardBg my-20 px-10 gap-10 h-[407px]">
          <div className="flex flex-col mt-14 w-[270px]">
            <p className="text-h2 text-center">Business</p>
            <p className="bg-body opacity-60 text-center mt-[18px]">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
          </div>
          <div className="">
            <p className="text-h1">{pricing ? "$990.00" : "$99.00"}</p>
            <p className="bg-body opacity-60 text-center">per month</p>
          </div>
          <button className="bg-pureBlack text-pureWhite text-h4 w-[270px] h-10 hover:bg-lightGrey hover:text-pureBlack">
            PICK PLAN
          </button>
        </div>
      </section>

      <BGSecondary />
    </>
  );
}
