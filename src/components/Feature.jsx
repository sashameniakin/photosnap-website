export default function Feature({ title, description, alt, src }) {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[72px] h-[72px] flex items-center">
        <img src={src} alt={alt} />
      </div>
      <p className="text-h3 mt-12 mb-4">{title}</p>
      <p className="text-body text-center opacity-60 min-h-[125px]">
        {description}
      </p>
    </div>
  );
}
