import BGSecondary from "../components/BGSecondary";
import NavSecondary from "../components/NavSecondary";
import FeaturesAll from "../components/Features/FeaturesAll";

export default function Features() {
  return (
    <>
      <NavSecondary
        title="FEATURES"
        description="We make sure all of our features are designed to be loved by every
      aspiring and even professional photograpers who wanted to share
      their stories."
        src="./images/features/hero.jpg"
        srcTablet="./images/features/tablet/hero.jpg"
        srcMobile="./images/features/mobile/hero.jpg"
        alt="hero"
      />
      <FeaturesAll />
      <BGSecondary />
    </>
  );
}
