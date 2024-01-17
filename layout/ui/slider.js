import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

export default function Slider({ images }) {
  const [opacities, setOpacities] = useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <div ref={sliderRef} className="fader lg:h-[500px]">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="fader__slide"
          style={{ opacity: opacities[idx] }}
        >
          <img src={src} className=" object-cover" />
        </div>
      ))}
    </div>
  );
}
