import Stories from "../components/Stories";
import ArrowButton from "../components/UI/button/button-arrow";
import MainStory from "../components/MainStory";

export default function Home() {
  return (
    <>
      <MainStory
        title={"CREATE AND SHARE YOUR PHOTO STORIES."}
        description={
          " Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
        flexDirection={""}
        backgroundColor={"bg-pureBlack"}
        textColor={"text-pureWhite"}
        src={"../images/home/create-and-share.jpg"}
        alt={"create-and-share-foto"}
        arrowSrc={"../images/home/arrow.svg"}
      />

      <MainStory
        title={"BEAUTIFUL STORIES EVERY TIME"}
        description={
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        }
        flexDirection={"flex-row-reverse"}
        backgroundColor={"bg-pureWhite"}
        textColor={"text-pureBlack"}
        src={"../images/home/beautiful-stories.jpg"}
        alt={"beautiful-stories"}
        arrowSrc={"../images/home/arrow-black.svg"}
      />

      <MainStory
        title={"DESIGNED FOR EVERYONE"}
        description={
          "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        }
        flexDirection={""}
        backgroundColor={"bg-pureWhite"}
        textColor={"text-pureBlack"}
        src={"../images/home/designed-for-everyone.jpg"}
        alt={"designed-for-everyone"}
        arrowSrc={"../images/home/arrow-black.svg"}
      />

      <Stories />

      <div className="flex justify-center items-end my-[120px] w-3/4 mx-auto gap-[30px]">
        <div className="flex flex-col items-center ">
          <img src="../images/home/responsive.svg" alt="responsive" />

          <p className="text-h3 mt-12 mb-4">100% Responsive</p>
          <p className="text-body text-justify">
            No matter which the device you're on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="../images/home/no-limit.svg" alt="no-limit" />

          <p className="text-h3 mt-[66px] mb-4">No Photo Upload Limit</p>
          <p className="text-body text-justify">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="../images/home/embed.svg" alt="embed" />

          <p className="text-h3 mt-12 mb-4">Available to Embed</p>
          <p className="text-body text-justify">
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </>
  );
}
