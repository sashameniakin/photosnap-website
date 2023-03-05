import Switch from "../components/UI/Switch/switch";
import { useState } from "react";
import BGSecondary from "../components/BGSecondary";
import NavSecondary from "../components/NavSecondary";
import Card from "../components/Pricing/Card";
import Item from "../components/Pricing/Item";

export default function Pricing() {
  const [pricing, setPricing] = useState(0);

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
      <section className="flex flex-col justify-center items-center gap-6 tablet:flex-col tablet:gap-6 desktop:flex-row desktop:gap-[30px] desktop:w-[70%] tablet:w-[95%] mx-auto">
        <Card
          title="Basic"
          description="Includes basic usage of our platform. Recommended for new and
      aspiring photographers."
          pricing={pricing}
          priceMonth="$19.00"
          priceYear="$190.00"
        />

        <div className="flex flex-col relative desktop:text-center tablet:text-left tablet:items-start desktop:items-center bg-pureBlack text-pureWhite  px-10 gap-10 desktop:h-[470px] tablet:h-[270px]">
          <div className="absolute block desktop:w-full desktop:h-[6px] tablet:h-full tablet:w-[6px] tablet:left-0 bg-gradient" />
          <div className="flex flex-col  tablet:justify-between tablet:flex-row desktop:pt-[88px] tablet:pt-[40px] desktop:flex-col desktop:items-center desktop:gap-10">
            <div className="flex flex-col tablet:w-[45%] desktop:w-full">
              <p className="text-h2">Pro</p>
              <p className="bg-body opacity-60 mt-[18px]">
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
            </div>
            <div className="flex flex-col tablet:items-end desktop:items-center">
              <p className="text-h1">{pricing ? "$390.00" : "$39.00"}</p>
              <p className="bg-body opacity-60 tablet:pr-2 desktop:pr-0">
                {pricing ? "per year" : "per month"}
              </p>
            </div>
          </div>
          <button className="bg-pureWhite text-pureBlack text-h4 w-[270px] h-10 hover:bg-lightGrey">
            PICK PLAN
          </button>
        </div>
        <Card
          title="Business"
          description="Additional features available such as more detailed metrics.
          Recommended for business owners."
          pricing={pricing}
          priceMonth="$99.00"
          priceYear="$990.00"
        />
      </section>
      <h1 className="text-h1 text-center mt-[160px] mb-14">COMPARE</h1>
      <section className="grid grid-cols-[3fr_1fr_1fr_1fr] grid-rows-9 justify-items-center items-center w-1/2 mx-auto mb-[160px]">
        <div className="text-h4 justify-self-stretch">
          <Item blackLinie title description="THE FEATURES" />
          <Item title description="UNLIMITED STORY POSTING" />
          <Item title description="UNLIMITED FOTO UPLOAD" />
          <Item title description="EMBEDDING CUSTOM CONTENT" />
          <Item title description="CUSTOMIZE METADATA" />
          <Item title description="ADVANCED METRICS" />
          <Item title description="PHOTO DOWNLOADS" />
          <Item title description="SEARCH ENGINE INDEXING" />
          <Item title description="CUSTOM ANALYTICS" />
        </div>
        <div className="text-h4 text-center justify-self-stretch">
          <Item blackLinie description="BASIC" />
          <Item check />
          <Item check />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="text-h4 text-center justify-self-stretch">
          <Item blackLinie description="PRO" />
          <Item check />
          <Item check />
          <Item check />
          <Item check />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="text-h4 text-center justify-self-stretch">
          <Item blackLinie description="BUSINESS" />
          <Item check />
          <Item check />
          <Item check />
          <Item check />
          <Item check />
          <Item check />
          <Item check />
          <Item check />
        </div>
      </section>

      <BGSecondary />
    </>
  );
}
