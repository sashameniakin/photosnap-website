import ArrowButton from "../components/UI/button/button-arrow";
import Switch from "../components/UI/Switch/switch";
import { useState } from "react";

export default function Pricing() {
  const [pricing, setPricing] = useState();

  return (
    <>
      <section className="relative flex flex-col-reverse desktop:flex-row tablet:flex-row">
        <div className="flex relative flex-col justify-center gap-[21px] bg-pureBlack text-pureWhite w-full h-auto px-7 py-[72px] desktop:w-[43%] desktop:px-28 tablet:px-10 tablet:w-[65%]">
          <div className="absolute block desktop:hidden tablet:hidden w-[128px] h-[6px] bg-gradient top-[0%] left-[10%]" />
          <p className="text-h1Mobile desktop:text-h1 tablet:text-h1">
            PRICING
          </p>
          <p className="text-body opacity-60 mb-[27px]">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>

        <picture className="w-full desktop:w-[57%] tablet:w-[35%]">
          <source
            media="(min-width:821px)"
            srcSet="./images/pricing/hero.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/pricing/tablet/hero.jpg"
          />
          <img
            src="./images/pricing/mobile/hero.jpg"
            alt="hero"
            className="w-full"
          />
        </picture>

        <div
          className={`absolute hidden desktop:block tablet:block w-[6px] h-[144px] bg-gradient top-1/3`}
        />
      </section>
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
      <section className="relative">
        <picture className="w-full">
          <source
            media="(min-width:821px)"
            srcSet="./images/features/bg-beta.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/features/tablet/bg-beta.jpg"
          />
          <img
            src="./images/features/mobile/bg-beta.jpg"
            alt="bg-beta"
            className="w-full"
          />
        </picture>
        <div className="absolute h-full w-full top-0 flex justify-between">
          <div className="flex flex-col justify-center gap-6 mx-auto desktop:items-center desktop:justify-between tablet:items-center tablet:justify-between w-[90%] text-pureWhite desktop:flex-row tablet:flex-row">
            <p className="text-h1Mobile w-full desktop:text-h1 tablet:text-h1 desktop:w-1/2 tablet:w-1/2">
              WE'RE IN BETA. GET YOUR INVITE TODAY!
            </p>
            <ArrowButton
              name={"GET AN INVITE"}
              src={"./images/home/arrow.svg"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
