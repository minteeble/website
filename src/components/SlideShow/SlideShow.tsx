import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { SlideShowProps, SlideShowType } from "./SlideShow.types";

const SlideShow = (props: SlideShowProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [translate, setTranslate] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);
  const [delay, setDelay] = useState<boolean>(true);
  const [rowLength, setRowLength] = useState<number>(0);
  const [infiniteCheck, setInfiniteCheck] =
    useState<{ check: boolean } | null>(null);

  useEffect(() => {
    if (!delay) {
      setTimeout(() => {
        setDelay(true);
      }, 400);
    }
  }, [delay]);

  const itemsNum = props.displayItems || 4;

  const width = props.itemWidth || 15;

  const gap = props.gap || 3;

  const autoScrollDelay = props.autoScrollDelay || 4000;

  const imageGallery = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.type === SlideShowType.Normal) {
      setImages(props.images ? props.images : props.items!);
    }
    if (props.type === SlideShowType.Infinite) {
      const items = props.images ? props.images : props.items!;
      setRowLength(items.length);
      setImages(() => {
        let newImages = items;

        for (let i = 0; i < itemsNum; i++) {
          newImages.push(items[i]);
        }

        return newImages;
      });
    }
  }, [props.type]);

  useEffect(() => {
    if (props.type === SlideShowType.Infinite) {
      if (infiniteCheck != null) {
        if (infiniteCheck.check) {
          setTimeout(() => {
            handleNext();
          }, 100);
        } else {
          setTimeout(() => {
            handlePrev();
          }, 100);
        }
      }
    }
  }, [infiniteCheck]);

  const [direction, setDirection] = useState<boolean>(true);

  const handleInfinitePrev = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e) {
      e.stopPropagation();
    }

    if (counter === 1) {
      imageGallery.current!.style.transition = "none";
      setTranslate(-(width + gap) * rowLength);
      setCounter(rowLength + 1);
      setTimeout(() => {
        imageGallery.current!.style.transition =
          "all 1s cubic-bezier(0.215, 0.61, 0.355, 1)";
      }, 100);
      setInfiniteCheck({ check: false });
    }

    handlePrev();

    // setTranslate(translate - 18);
    // if (images.length > 0) {
    //   setImages((images) => {
    //     let newImages: string[] = [];
    //     newImages.push(images[images.length - 1]);

    //     images.map((image, i) => {
    //       if (i === images.length - 1) return;

    //       newImages.push(image);
    //     });

    //     return newImages;
    //   });
    // }
  };
  const handleInfiniteNext = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e) {
      e.stopPropagation();
    }

    if (counter === rowLength + 1) {
      imageGallery.current!.style.transition = "unset";
      setTranslate(0);
      setCounter(1);
      setTimeout(() => {
        imageGallery.current!.style.transition =
          "all 1s cubic-bezier(0.215, 0.61, 0.355, 1)";
      }, 100);
      setInfiniteCheck({ check: true });
    } else {
      handleNext();
    }
  };

  useEffect(() => {
    if (counter === 1) {
      setDirection(true);
    }
    if (counter + itemsNum - 1 === images.length) {
      setDirection(false);
    }
  }, [counter]);

  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    if (props.type === SlideShowType.Normal) {
      handleAutoScroll();
    }
    if (props.type === SlideShowType.Infinite) {
      handleInfiniteNext();
    }
  }, [images, timer]);

  useEffect(() => {
    if (props.autoScroll) {
      setInterval(() => {
        setTimer(Math.random() * 100 - timer);
      }, autoScrollDelay);
    }
  }, [props.autoScroll]);

  const handleAutoScroll = () => {
    if (props.autoScroll && props.type === SlideShowType.Normal) {
      if (direction) {
        // setTimeout(() => {
        handleNext();
        // }, 3000);
      } else {
        // setTimeout(() => {
        handlePrev();
        // }, 3000);
      }
    }
  };

  const handleNext = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }
    if (counter + itemsNum - 1 < images.length) {
      setTranslate(translate - (width + gap));
      setCounter(counter + 1);
    }
  };

  const handlePrev = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }
    if (counter > 1) {
      setTranslate(translate + width + gap);
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="slideshow-container">
        <div
          className="slideshow"
          style={
            {
              "--width": width + "rem",
              "--items": itemsNum,
              "--gap": `${gap}rem`,
            } as CSSProperties
          }
          onWheel={(e) => {
            if (delay) {
              if (e.deltaX > 0) {
                if (props.type === SlideShowType.Normal) {
                  handleNext();
                } else {
                  handleInfiniteNext();
                }
              } else {
                if (props.type === SlideShowType.Normal) {
                  handlePrev();
                } else {
                  handleInfinitePrev();
                }
              }
              setDelay(false);
            }
          }}
        >
          <button
            className={`prev ${
              props.type === SlideShowType.Normal && counter === 1
                ? "disabled"
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (props.type === SlideShowType.Normal) {
                handlePrev();
              } else {
                handleInfinitePrev();
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className={`next ${
              props.type === SlideShowType.Normal &&
              counter + itemsNum - 1 === images.length
                ? "disabled"
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (props.type === SlideShowType.Normal) {
                handleNext();
              } else {
                handleInfiniteNext();
              }
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="gallery-wrapper">
            <div
              className="image-gallery"
              ref={imageGallery}
              style={{ transform: `translateX(${translate}rem)` }}
            >
              {props.images &&
                images.map((image) => {
                  return (
                    <div className="image-wrapper">
                      <img className="slideshow-image" src={image} />
                    </div>
                  );
                })}
              {props.items &&
                images.map((image, i) => {
                  return (
                    <div
                      style={{
                        cursor: props.onImageClick ? "pointer" : "unset",
                      }}
                      key={i}
                      className="item-wrapper"
                      onClick={() => {
                        props.onImageClick ? props.onImageClick() : () => {};
                      }}
                    >
                      {image}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
