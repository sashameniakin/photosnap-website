import ArrowButton from "./UI/button/button-arrow";

export default function MainStory({
  title,
  description,
  flexDirection,
  backgroundColor,
  textColor,
  src,
  srcTablet,
  srcMobile,
  alt,
  arrowSrc,
  linieY,
  linieX,
}) {
  return (
    <div className={`relative flex flex-col-reverse ${flexDirection}`}>
      <div
        className={`flex relative flex-col justify-center gap-[21px] ${backgroundColor} ${textColor} w-full h-[419px] pl-[33px] pr-6 desktop:w-[43%] desktop:px-28 desktop:h-auto tablet:px-10 tablet:w-[65%] tablet:h-auto`}
      >
        <div
          className={`absolute ${linieX} w-[128px] h-[6px] bg-gradient top-[0%] left-[10%]`}
        />
        <h1 className="text-h1Mobile desktop:text-h1 tablet:text-h1">
          {title}
        </h1>
        <p className="text-body opacity-60 mb-[27px]">{description}</p>
        <ArrowButton name={"GET AN INVITE"} src={arrowSrc} />
      </div>

      <picture className="w-full desktop:w-[57%] tablet:w-[35%]">
        <source media="(min-width:821px)" srcSet={src} />
        <source media="(min-width:415px)" srcSet={srcTablet} />
        <img src={srcMobile} alt={alt} className="w-full" />
      </picture>

      <div
        className={`absolute ${linieY} w-[6px] h-[304px] bg-gradient top-1/4`}
      />
    </div>
  );
}
