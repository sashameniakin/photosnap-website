export default function Menu({ children }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-modal z-10">
      <div className="bg-pureWhite flex flex-col">{children}</div>
    </div>
  );
}
