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
  dekor,
}) {
  return (
    <div className={`relative flex ${flexDirection} w-full`}>
      <div
        className={`flex flex-col justify-center gap-[21px]  ${backgroundColor} ${textColor} w-[43%] tablet:w-[43%] tablet:px-28 mobile:px-10 mobile:w-[70%]`}
      >
        <p className="text-h1">{title}</p>
        <p className="text-body opacity-60 mb-[27px]">{description}</p>
        <ArrowButton name={"GET AN INVITE"} src={arrowSrc} />
      </div>
      <picture className="w-[57%]">
        <source media="(min-width:769px)" srcSet={src} />
        <source media="(min-width:415px)" srcSet={srcTablet} />
        <img src={srcMobile} alt={alt} className="w-full" />
      </picture>

      <div
        className={`absolute ${dekor} w-[6px] h-[304px] bg-gradient top-1/4`}
      />
    </div>
  );
}
