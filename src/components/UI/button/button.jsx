export default function Button({ desktop, tablet, mobile }) {
  return (
    <button
      className={`${mobile} bg-pureBlack text-pureWhite text-h4 px-6 py-3 hover:bg-lightGrey hover:text-pureBlack desktop:${desktop} tablet:${tablet}`}
    >
      GET AN INVITE
    </button>
  );
}
