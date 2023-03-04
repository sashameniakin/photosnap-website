import StoriesHome from "../components/StoriesHome";
import MainStory from "../components/MainStory";
import FeaturesAll from "../components/Home/FeaturesAll";

export default function Home() {
  return (
    <>
      <MainStory
        title={"CREATE AND SHARE YOUR PHOTO STORIES."}
        description={
          " Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
        flexDirection={"desktop:flex-row tablet:flex-row"}
        backgroundColor={"bg-pureBlack"}
        textColor={"text-pureWhite"}
        src={"../images/home/create-and-share.jpg"}
        srcTablet={"../images/home/tablet/create-and-share.jpg"}
        srcMobile={"../images/home/mobile/create-and-share.jpg"}
        alt={"create-and-share-foto"}
        arrowSrc={"../images/home/arrow.svg"}
        linieY={"hidden desktop:block tablet:block"}
        linieX={"block desktop:hidden tablet:hidden"}
      />

      <MainStory
        title={"BEAUTIFUL STORIES EVERY TIME"}
        description={
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        }
        flexDirection={"desktop:flex-row-reverse tablet:flex-row-reverse"}
        backgroundColor={"bg-pureWhite"}
        textColor={"text-pureBlack"}
        src={"../images/home/beautiful-stories.jpg"}
        srcTablet={"../images/home/tablet/beautiful-stories.jpg"}
        srcMobile={"../images/home/mobile/beautiful-stories.jpg"}
        alt={"beautiful-stories"}
        arrowSrc={"../images/home/arrow-black.svg"}
        linieY={"hidden desktop:hidden tablet:hidden"}
        linieX={"hidden desktop:hidden tablet:hidden"}
      />

      <MainStory
        title={"DESIGNED FOR EVERYONE"}
        description={
          "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        }
        flexDirection={"desktop:flex-row tablet:flex-row"}
        backgroundColor={"bg-pureWhite"}
        textColor={"text-pureBlack"}
        src={"../images/home/designed-for-everyone.jpg"}
        srcTablet={"../images/home/tablet/designed-for-everyone.jpg"}
        srcMobile={"../images/home/mobile/designed-for-everyone.jpg"}
        alt={"designed-for-everyone"}
        arrowSrc={"../images/home/arrow-black.svg"}
        linieY={"hidden desktop:hidden tablet:hidden"}
        linieX={"hidden desktop:hidden tablet:hidden"}
      />
      <StoriesHome />
      <FeaturesAll />
    </>
  );
}
