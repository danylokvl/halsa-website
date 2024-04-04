import StarIcon from "../assets/icons/star.svg";
import "./feedback.less";
import img1 from "../assets/img/feedbackImg1.webp";
import img2 from "../assets/img/feedbackImg2.webp";
import img3 from "../assets/img/feedbackImg3.webp";
import img4 from "../assets/img/feedbackImg4.webp";

//additionalStyles, title, img, imgAlt, name, starsCount, noBackground, singlePerson
const Feedback = (props) => {
  let starsArray = [];
  for (let index = 0; index < props.starsCount; index++) {
    starsArray.push(index);
  }

  if (props.noBackground) {
    return (
      <div className="feedback noBackground" style={props.additionalStyles}>
        <div className="feedback__personInfoContainer">
          {props.singlePerson ? (
            <img className="feedback__personImage" src={props.img} alt={props.imgAlt} />
          ) : (
            <div className="feedback__imagesContainer">
              <img className="feedback__personImage" src={img1} alt="person image" />
              <img className="feedback__personImage" src={img2} alt="person image" />
              <img className="feedback__personImage" src={img3} alt="person image" />
              <img className="feedback__personImage" src={img4} alt="person image" />
            </div>
          )}
          <div className="feedback__nameAndRateContainer">
            <div className="feedback__starsContainer">
              {starsArray.map((_, index) => (
                <img src={StarIcon} alt="star" key={index * Math.random()} />
              ))}
            </div>
            <span>{props.name}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="feedback" style={props.additionalStyles}>
        <h3>{props.title}</h3>
        <div className="feedback__personInfoContainer">
          <img className="feedback__personImage" src={props.img} alt={props.imgAlt} />
          <div className="feedback__nameAndRateContainer">
            <div className="feedback__starsContainer">
              {starsArray.map((_, index) => (
                <img src={StarIcon} alt="star" key={index * Math.random()} />
              ))}
            </div>

            <span>{props.name}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Feedback;
