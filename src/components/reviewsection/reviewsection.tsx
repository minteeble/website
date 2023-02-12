import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faDiamond,
  faGem,
  faHandsBubbles,
  faLightbulb,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import SlideShow, { SlideShowType } from "../SlideShow";
import Review from "../Review";
import review from "./../../../review.json";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="shapes">
        {/* <div className="ring-l common-b"></div> */}
        <div className="b-pattern-shape common-b "></div>
        <div className="circle common-b"></div>
        <div className="b-circle common-b"></div>
        <div className="animated-move common-b">
          <div className="icon-animated"></div>
        </div>
      </div>
      <div className="container-as">
        <div className="row">
          <div className="column-as">
            <div className="section-heading">
              <h2 className="after">What our customers think of us</h2>
              <p className="p-margin">
                Over time we have created many projects and all our customers
                have always been satisfied with our work.
              </p>
            </div>
          </div>
          <div className="slideshow-wrapper">
            <SlideShow
              type={SlideShowType.Infinite}
              autoScroll
              displayItems={3}
              itemWidth={22}
              autoScrollDelay={10000}
              gap={5}
              items={review.map((review, i) => {
                return (
                  <Review
                    key={i}
                    avatar={
                      review.avatar
                        ? `/build/images/review/${review.name}.webp`
                        : "/build/images/review/user.svg"
                    }
                    flag={review.flag}
                    name={review.name}
                    country={review.country}
                    reviewBody={review.body}
                  />
                );
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
