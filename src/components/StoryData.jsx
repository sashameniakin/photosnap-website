export default function StoryData({ data, title, author, src, alt }) {
  return (
    <a
      href="/"
      className="relative group flex flex-col justify-center items-center hover:-translate-y-5 cursor-pointer transition-transform"
    >
      <img className="w-full" src={src} alt={alt} />
      <span className="absolute top-1/2 w-full h-1/2 bg-template" />
      <div className="absolute flex flex-col top-3/4 w-full">
        <p className="text-pureWhite text-[13px] w-4/5 mx-auto leading-[17px]">
          {data}
        </p>
        <p className="text-pureWhite text-h3 w-4/5 mx-auto mb-1">{title}</p>
        <p className="text-pureWhite text-[13px] w-4/5 mx-auto leading-[17px] border-pureWhite border-opacity-25 border-b pb-4">
          {author}
        </p>
        <div className="flex justify-between w-4/5 mx-auto pt-6 pb-5 desktop:pt-4 desktop:pb-[13px] tablet:pt-5 tablet:pb-[22px]">
          <p className="text-pureWhite text-h4">READ STORY</p>
          <img src="../images/home/arrow.svg" alt="arrow" />
        </div>
        <div className="h-[6px] relative bottom-0 bg-gradient z-10 hidden group-hover:flex" />
      </div>
    </a>
  );
}
