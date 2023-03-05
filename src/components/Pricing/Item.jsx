export default function Item({ check, blackLinie, title, description }) {
  return (
    <p
      className={`py-6 h-[63px] ${!description ? "flex justify-center" : ""} ${
        title ? "pl-5" : ""
      } ${
        blackLinie
          ? "border-b-pureBlack border-b-[1px]"
          : "border-b-lightGrey border-b-[1px]"
      }`}
    >
      {check && <img src="../images/pricing/check.svg" alt="check" />}
      {description}
    </p>
  );
}
