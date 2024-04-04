import "./sectionHomeHero.less";
import ScrollableButton from "../components/ScrollableButton";
import background from "../assets/img/HomeHeroSection/background.webp";
import bottomImage from "../assets/img/HomeHeroSection/1.webp";
import Feedback from "../components/Feedback";

const SectionHomeHero = () => {
  return (
    <section className="homeHero">
      <div className="homeHero__contentContainer">
        <h1>
          Your Health Center. <br /> All In One App.
        </h1>
        <span>
          Your Journey to Optimal Living Starts Here: <br /> Explore Our Integrated Health Hub.
        </span>
        <div className="homeHero__buttonsContainer">
          <ScrollableButton className={"homeHero__getStartedBtn"}>Get Started</ScrollableButton>
          <ScrollableButton className={"homeHero__featuresBtn"}>Features</ScrollableButton>
        </div>
        <div className="homeHero__feedbackContainer">
          <Feedback
            additionalStyles={{ maxWidth: "348px" }}
            singlePerson={false}
            name="Trusted by 1 Million users"
            noBackground
            starsCount={5}
          />
        </div>
        <img src={bottomImage} alt="bottom image" className="homeHero__bottomImage" />
      </div>
      <img src={background} alt="background image" className="homeHero__backgroundImg" />
    </section>
  );
};

export default SectionHomeHero;
