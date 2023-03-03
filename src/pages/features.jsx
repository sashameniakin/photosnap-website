import ArrowButton from "../components/UI/button/button-arrow";
import Feature from "../components/Feature";

export default function Features() {
  return (
    <>
      <section className="relative flex">
        <div className="flex relative flex-col justify-center gap-[21px] bg-pureBlack text-pureWhite w-full h-[419px] pl-[33px] pr-6 desktop:w-[43%] desktop:px-28 desktop:h-auto tablet:px-10 tablet:w-[65%] tablet:h-auto">
          <div className="absolute block desktop:hidden tablet:hidden w-[128px] h-[6px] bg-gradient top-[0%] left-[10%]" />
          <p className="text-h1Mobile desktop:text-h1 tablet:text-h1">
            FEATURES
          </p>
          <p className="text-body opacity-60 mb-[27px]">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>

        <picture className="w-full desktop:w-[57%] tablet:w-[35%]">
          <source
            media="(min-width:821px)"
            srcSet="./images/features/hero.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/features/tablet/hero.jpg"
          />
          <img
            src="./images/features/mobile/hero.jpg"
            alt="hero"
            className="w-full"
          />
        </picture>

        <div
          className={`absolute hidden desktop:block tablet:block w-[6px] h-[144px] bg-gradient top-1/3`}
        />
      </section>
      <section className="grid grid-cols-3 grid-rows-2 w-[80%] mx-auto my-20 items-center gap-12">
        <Feature
          title="100% Responsive"
          description="No matter which the device you're on, our site is fully responsive
        and stories look beautiful on any screen."
          alt="responsive"
          src="../images/features/responsive.svg"
        />
        <Feature
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in
          bulk and share all of your stories in one go."
          alt="no-limit"
          src="../images/features/no-limit.svg"
        />
        <Feature
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more."
          alt="embed"
          src="../images/features/embed.svg"
        />
        <Feature
          title="Custom Domain"
          description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          alt="custom-domain"
          src="../images/features/custom-domain.svg"
        />
        <Feature
          title="Boost Your Exposure"
          description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
          alt="boost-your-exposure"
          src="../images/features/boost-exposure.svg"
        />
        <Feature
          title="Drag & Drop Image"
          description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
          alt="drag-drop-image"
          src="../images/features/drag-drop.svg"
        />
      </section>
      <section className="relative">
        <picture className="w-full">
          <source
            media="(min-width:821px)"
            srcSet="./images/features/bg-beta.jpg"
          />
          <source
            media="(min-width:415px)"
            srcSet="./images/features/tablet/bg-beta.jpg"
          />
          <img
            src="./images/features/mobile/bg-beta.jpg"
            alt="bg-beta"
            className="w-full"
          />
        </picture>
        <div className="absolute h-full w-full top-0 flex justify-between">
          <div className="flex items-center mx-auto justify-between w-[90%] text-pureWhite">
            <p className="text-h1 w-1/3">
              WE'RE IN BETA. GET YOUR INVITE TODAY!
            </p>
            <ArrowButton
              name={"GET AN INVITE"}
              src={"./images/home/arrow.svg"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
