import Item from "./Item";

export default function TableMobile() {
  return (
    <section className="flex flex-col tablet:hidden desktop:hidden w-[80%] mx-auto mb-16 gap-4">
      <p className="text-h4"> UNLIMITED STORY POSTING</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" check />
        <Item title="PRO" check />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4"> UNLIMITED PHOTO UPLOAD</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" check />
        <Item title="PRO" check />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4">EMBEDDING CUSTOM CONTENT</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" />
        <Item title="PRO" check />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4">CUSTOMIZE METADATA</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" />
        <Item title="PRO" check />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4">ADVANCED METRICS</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" />
        <Item title="PRO" />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4">PHOTO DOWNLOADS</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" />
        <Item title="PRO" />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4">SEARCH ENGINE INDEXING</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" />
        <Item title="PRO" />
        <Item title="BUSINESS" check />
      </div>
      <p className="text-h4">CUSTOM ANALYTICS</p>
      <div className="grid grid-cols-3 text-tableMobile pb-6 border-b-[1px] border-lightGrey">
        <Item title="BASIC" />
        <Item title="PRO" />
        <Item title="BUSINESS" check />
      </div>
    </section>
  );
}
