export default function NavSecondary({
  title,
  description,
  src,
  srcTablet,
  srcMobile,
  alt,
}) {
  return (
    <section className="relative flex flex-col-reverse desktop:flex-row tablet:flex-row">
      <div className="flex relative flex-col justify-center gap-[21px] bg-pureBlack text-pureWhite w-full h-auto px-7 py-[72px] desktop:w-[43%] desktop:px-28 tablet:px-10 tablet:w-[65%]">
        <div className="absolute block desktop:hidden tablet:hidden w-[128px] h-[6px] bg-gradient top-[0%] left-[10%]" />
        <h1 className="text-h1Mobile desktop:text-h1 tablet:text-h1">
          {title}
        </h1>
        <p className="text-body opacity-60 mb-[27px]">{description}</p>
      </div>

      <picture className="w-full desktop:w-[57%] tablet:w-[35%]">
        <source media="(min-width:821px)" srcSet={src} />
        <source media="(min-width:415px)" srcSet={srcTablet} />
        <img src={srcMobile} alt="hero" className="w-full" />
      </picture>

      <div
        className={`absolute hidden desktop:block tablet:block w-[6px] h-[144px] bg-gradient top-1/3`}
      />
    </section>
  );
}
