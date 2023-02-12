import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewProps } from "./Review.types";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Review = (props: ReviewProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="review" data-aos="zoom-in">
        <div className="avatar-wrapper">
          <img src={props.avatar} alt="" className="avatar" />
        </div>
        <div className="name">{props.name}</div>
        <div className="country">
          <img src={props.flag} alt="" className="flag" />
          {props.country}
        </div>
        <div className="rate">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <div className="review-body">
          <FontAwesomeIcon icon={faQuoteLeft} className={"quotes"} />

          {props.reviewBody}
        </div>
      </div>
    </>
  );
};

export default Review;
