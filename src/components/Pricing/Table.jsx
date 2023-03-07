import Item from "./Item";

export default function Table() {
  return (
    <section className="hidden tablet:grid desktop:grid grid-cols-[3fr_1fr_1fr_1fr] grid-rows-9 justify-items-center items-center desktop:w-1/2 tablet:w-[95%] mx-auto desktop:mb-[160px] tablet:mb-28">
      <div className="text-h4 justify-self-stretch">
        <Item blackLinie title description="THE FEATURES" />
        <Item title description="UNLIMITED STORY POSTING" />
        <Item title description="UNLIMITED FOTO UPLOAD" />
        <Item title description="EMBEDDING CUSTOM CONTENT" />
        <Item title description="CUSTOMIZE METADATA" />
        <Item title description="ADVANCED METRICS" />
        <Item title description="PHOTO DOWNLOADS" />
        <Item title description="SEARCH ENGINE INDEXING" />
        <Item title description="CUSTOM ANALYTICS" />
      </div>
      <div className="text-h4 text-center justify-self-stretch">
        <Item blackLinie description="BASIC" />
        <Item check />
        <Item check />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="text-h4 text-center justify-self-stretch">
        <Item blackLinie description="PRO" />
        <Item check />
        <Item check />
        <Item check />
        <Item check />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="text-h4 text-center justify-self-stretch">
        <Item blackLinie description="BUSINESS" />
        <Item check />
        <Item check />
        <Item check />
        <Item check />
        <Item check />
        <Item check />
        <Item check />
        <Item check />
      </div>
    </section>
  );
}
