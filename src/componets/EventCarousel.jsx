//react
import React, { useState, useRef, useEffect } from "react";
//react dom
import PropTypes from "prop-types";
import logoImg from "../assests/logo_crop.png";
const useTilt = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      e.preventDefault();

      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      if (e.touches) {
        state.mouseX = e.touches[0].clientX;
        state.mouseY = e.touches[0].clientY;
      } else {
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
      }

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    const handleMouseLeave = () => {
      el.style.setProperty("--px", 0.5);
      el.style.setProperty("--py", 0.5);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchmove", handleMouseMove);
    el.addEventListener("touchend", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchmove", handleMouseMove);
      el.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return ref;
};

const Slide = ({
  image,
  title,
  subtitle,
  description,
  offset,
  isPageBackground,
}) => {
  const active = offset === 0 ? true : null,
    ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="w-[90vw] slide lg:w-[50vw]"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {isPageBackground && (
        <div
          className="bg-contain slideBackground invert bg-center bg-no-repeat  m-36 h-50vh"
          style={{
            backgroundImage: `url('${logoImg}')`,
          }}
        />
      )}
      <div
        className="w-[90vw] slideContent md:w-[60%]"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="slideContentInner">
          {title && (
            <h2 className="slideTitle text-6xl lg:text-8xl text-neutral-content" dir="auto">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="slideSubtitle text-6xl lg:text-8xl before:text-neutral-content" dir="auto">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="slideDescription text-xl lg:text-3xl" dir="auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  offset: PropTypes.number.isRequired,
  isPageBackground: PropTypes.bool,
};

const Carousel = ({ slides, isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="slidesWrapper ">
      <div className="slides">
        <button className="prevSlideBtn top-2/3 md:top-1/2 -left-[-1%] md:-left-[5%]" onClick={handlePrevSlide}>
          <i className="fas fa-chevron-left" />
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (slideIndex - i);

          if (typeof slide === "string") {
            return (
              <Slide
                image={slide}
                offset={offset}
                isPageBackground={isPageBackground}
                key={i}
              />
            );
          } else {
            return (
              <Slide
                image={slide.image}
                title={slide.title}
                subtitle={slide.subtitle}
                description={slide.description}
                offset={offset}
                isPageBackground={isPageBackground}
                key={i}
              />
            );
          }
        })}
        <button className="nextSlideBtn top-2/3 md:top-1/2 -right-[-1%] md:-right-[5%]" onClick={handleNextSlide}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  isPageBackground: PropTypes.bool,
};

const slides = [
  {
    id: 1,
    title: "First",
    subtitle: "slide",
    description: "Praesent ac sem eget est.",
    image: "https://picsum.photos/id/1/500/500",
  },
  {
    id: 2,
    title: "Second",
    subtitle: "slide",
    description: "Praesent ac sem eget est.",
    image: "https://picsum.photos/id/234/500/500",
  },
  {
    id: 3,
    title: "Third",
    subtitle: "slide",
    description: "Praesent ac sem eget est.",
    image: "https://picsum.photos/id/790/500/500",
  },
  {
    id: 3,
    title: "Third",
    subtitle: "slide",
    description: "Praesent ac sem eget est.",
    image: "https://picsum.photos/id/790/500/500",
  },
];

const EventCarousel = () => <Carousel slides={slides} isPageBackground />;

export default EventCarousel;
