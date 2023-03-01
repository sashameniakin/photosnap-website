import Story from "./Story";

export default function Stories() {
  return (
    <div className="grid w-auto grid-rows-4 tablet:grid-cols-2 tablet:grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 ">
      <Story
        title={"The Mountains"}
        author={"by John Appleseed"}
        src={"../images/home/mountains.jpg"}
        alt={"mountains"}
      />
      <Story
        title={"Sunset Cityscapes"}
        author={"by Benjamin Cruz"}
        src={"../images/home/cityscapes.jpg"}
        alt={"cityscapes"}
      />
      <Story
        title={"18 Days Voyage"}
        author={"by Alexei Borodin"}
        src={"../images/home/18-days-voyage.jpg"}
        alt={"18-days-voyage"}
      />
      <Story
        title={"Architecturals"}
        author={"by Samantha Brooke"}
        src={"../images/home/architecturals.jpg"}
        alt={"architecturals"}
      />
    </div>
  );
}
