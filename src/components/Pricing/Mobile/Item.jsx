export default function Item({ title, check }) {
  return (
    <span className="flex flex-col">
      <p className="opacity-50 pb-2">{title}</p>
      {check && (
        <img src="../images/pricing/check.svg" alt="check" width="16px" />
      )}
    </span>
  );
}
