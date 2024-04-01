import StarIcon from "../assets/icons/star.svg";
import "./feedback.less";

const Feedback = ({ additionalStyles, title, img, imgAlt, name, starsCount }) => {
  let starsArray = [];
  for (let index = 0; index < starsCount; index++) {
    starsArray.push(index);
  }

  return (
    <div className="feedback" style={additionalStyles}>
      <h3>{title}</h3>
      <div className="feedback__personInfoContainer">
        <img className="feedback__personImage" src={img} alt={imgAlt} />
        <div className="feedback__nameAndRateContainer">
          <div className="feedback__starsContainer">
            {starsArray.map((_, index) => (
              <img src={StarIcon} alt="star" key={index * Math.random()} />
            ))}
          </div>

          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
