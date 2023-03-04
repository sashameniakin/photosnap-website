export default function Switch({ pricing, setPricing }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-[32px] mt-[120px] overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={pricing}
            readOnly
          />
          <span className="mr-8 text-h3 opacity-100 peer peer-checked:opacity-50">
            Monthly
          </span>
          <div
            onClick={() => {
              setPricing(!pricing);
            }}
            className="w-[64px] h-8 bg-lightGrey rounded-full peer peer-checked:after:translate-x-[133%] peer-checked:after:border-pureWhite peer-checked:after:bg-pureWhite after:content-[''] after:absolute after:top-1 after:left-[108px] after:bg-pureBlack after:border-pureBlack after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-pureBlack"
          ></div>

          <span className="ml-8 text-h3 opacity-50 peer peer-checked:opacity-100">
            Yearly
          </span>
        </label>
      </div>
    </div>
  );
}
