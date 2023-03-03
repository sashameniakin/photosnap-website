import StoriesHome from "../components/StoriesHome";
import MainStory from "../components/MainStory";
import Feature from "../components/Feature";

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

      <div className="flex flex-col items-end my-[120px] w-3/4 mx-auto gap-[30px] desktop:flex-row desktop:w-3/4 tablet:flex-col tablet:w-1/2">
        <Feature
          title="100% Responsive"
          description="No matter which the device you're on, our site is fully responsive
        and stories look beautiful on any screen."
          alt="responsive"
          src="../images/home/responsive.svg"
        />
        <Feature
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in
          bulk and share all of your stories in one go."
          alt="no-limit"
          src="../images/home/no-limit.svg"
        />
        <Feature
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more."
          alt="embed"
          src="../images/home/embed.svg"
        />
      </div>
    </>
  );
}
