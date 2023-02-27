export default function Story({ title, author, src, alt }) {
  return (
    <a href="/" className="relative flex justify-center w-1/4">
      <picture className="w-full">
        <img className="w-full" src={src} alt={alt} />
        <span className="absolute top-1/2 w-full h-1/2 bg-template" />
      </picture>
      <div className="absolute flex flex-col top-3/4 w-4/5 mx-auto">
        <p className="text-pureWhite text-h3 mb-1">{title}</p>
        <p className="text-pureWhite text-[13px] leading-[17px] border-pureWhite border-opacity-25 border-b pb-4">
          {author}
        </p>
        <div className="flex justify-between mt-5">
          <p className="text-pureWhite text-h4">READ STORY</p>
          <img src="../images/home/arrow.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}
