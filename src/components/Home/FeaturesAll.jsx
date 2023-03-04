import Feature from "../Feature";

export default function FeaturesAll() {
  return (
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
  );
}
