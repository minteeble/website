import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewProps } from "./Review.types";

const Review = (props: ReviewProps) => {
  return (
    <>
      <div className="review">
        <div className="avatar-wrapper">
          <img src={props.avatar} alt="" className="avatar" />
        </div>
        <div className="name">{props.name}</div>
        <div className="job">{props.job}</div>
        <div className="review-body">
          <FontAwesomeIcon icon={faQuoteLeft} />
          {props.reviewBody}
        </div>
        <div className="rate">⭐⭐⭐⭐⭐</div>
      </div>
    </>
  );
};

export default Review;
