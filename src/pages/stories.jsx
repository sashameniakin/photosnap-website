import ArrowButton from "../components/UI/button/button-arrow";
import StoriesItems from "../components/Stories/Stories";

export default function Stories() {
  return (
    <>
      <section className="relative">
        <picture className="w-full">
          <source
            media="(min-width:821px)"
            srcSet="./images/stories/moon-of-appalacia.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/stories/tablet/moon-of-appalacia.jpg"
          />
          <img
            src="./images/stories/mobile/moon-of-appalacia.jpg"
            alt="moon-of-appalacia"
            className="w-full"
          />
        </picture>
        <div className="bg-pureBlack text-pureWhite flex flex-col gap-6 px-6 py-12 justify-center desktop:hidden tablet:hidden">
          <p className="text-h4">LAST MONTH'S FEATURED STORY</p>
          <div className="flex flex-col gap-4">
            <h1 className="text-h1">HAZY FULL MOON OF APPALACHIA</h1>
            <p className="text-stories opacity-75">
              March 2nd 2020{" "}
              <span className="text-stories opacity-100">
                by John Appleseed
              </span>
            </p>
          </div>
          <article className="text-body opacity-60">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </article>
          <ArrowButton name="READ THE STORY" src="./images/home/arrow.svg" />
        </div>
        <div className="absolute hidden text-pureWhite desktop:flex tablet:flex flex-col gap-6 justify-center top-0 bottom-0 w-1/2 mx-28">
          <p className="text-h4">LAST MONTH'S FEATURED STORY</p>
          <div className="flex flex-col gap-4">
            <p className="text-h1">HAZY FULL MOON OF APPALACHIA</p>
            <p className="text-stories opacity-75">
              March 2nd 2020{" "}
              <span className="text-stories opacity-100">
                by John Appleseed
              </span>
            </p>
          </div>
          <article className="text-body opacity-60">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </article>
          <ArrowButton name="READ THE STORY" src="./images/home/arrow.svg" />
        </div>
      </section>
      <StoriesItems />
    </>
  );
}
