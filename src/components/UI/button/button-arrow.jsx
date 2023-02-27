export default function ArrowButton({ name, src }) {
  return (
    <button className="text-h4 flex items-center gap-[18px] hover:underline underline-offset-1">
      {name}
      <img src={src} alt="arrow" />
    </button>
  );
}
