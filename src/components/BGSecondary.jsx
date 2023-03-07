import ArrowButton from "./UI/button/button-arrow";

export default function BGSecondary() {
  return (
    <section className="relative">
      <div className="absolute block w-[128px] left-[10%] h-[6px]  desktop:w-[6px] tablet:h-full tablet:w-[6px] tablet:left-0 bg-gradient" />
      <picture className="w-full">
        <source media="(min-width:821px)" srcSet="./images/bg-beta.jpg" />
        <source
          media="(min-width:415px)"
          srcSet="./images/tablet/bg-beta.jpg"
        />
        <img
          src="./images/mobile/bg-beta.jpg"
          alt="bg-beta"
          className="w-full"
        />
      </picture>
      <div className="absolute h-full w-full top-0 flex justify-between">
        <div className="flex flex-col justify-center gap-6 mx-auto desktop:items-center desktop:justify-between tablet:items-center tablet:justify-between w-[90%] text-pureWhite desktop:flex-row tablet:flex-row">
          <p className="text-h1Mobile w-full desktop:text-h1 tablet:text-h1 desktop:w-1/2 tablet:w-1/2">
            WE'RE IN BETA. GET YOUR INVITE TODAY!
          </p>
          <ArrowButton name={"GET AN INVITE"} src={"./images/home/arrow.svg"} />
        </div>
      </div>
    </section>
  );
}
