import ArrowButton from "./UI/button/button-arrow";

export default function MainStory({
  title,
  description,
  flexDirection,
  backgroundColor,
  textColor,
  src,
  alt,
  arrowSrc,
}) {
  return (
    <div className={`flex ${flexDirection} w-full`}>
      <div
        className={`flex flex-col justify-center gap-[21px] ${backgroundColor} ${textColor} px-28`}
      >
        <p className="text-h1">{title}</p>
        <p className="text-body opacity-60 mb-[27px]">{description}</p>
        <ArrowButton name={"GET AN INVITE"} src={arrowSrc} />
      </div>
      <img src={src} alt={alt} className="w-[57%]" />
    </div>
  );
}
