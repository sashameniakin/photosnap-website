export default function Card({
  title,
  description,
  pricing,
  priceMonth,
  priceYear,
}) {
  return (
    <div className="flex flex-col desktop:text-center tablet:text-left tablet:items-start desktop:items-center bg-cardBg px-10 gap-10 desktop:h-[407px] tablet:h-[270px]">
      <div className="flex flex-col  tablet:justify-between tablet:flex-row desktop:pt-[56px] tablet:pt-[40px] desktop:flex-col desktop:items-center desktop:gap-10">
        <div className="flex flex-col tablet:w-[45%] desktop:w-full">
          <p className="text-h2">{title}</p>
          <p className="bg-body opacity-60 mt-[18px] ">{description}</p>
        </div>
        <div className="flex flex-col tablet:items-end desktop:items-center">
          <p className="text-h1">{pricing ? priceYear : priceMonth}</p>
          <p className="bg-body opacity-60 tablet:pr-2 desktop:pr-0">
            {pricing ? "per year" : "per month"}
          </p>
        </div>
      </div>
      <button className="bg-pureBlack text-pureWhite text-h4 w-[270px] h-10 hover:bg-lightGrey hover:text-pureBlack">
        PICK PLAN
      </button>
    </div>
  );
}
