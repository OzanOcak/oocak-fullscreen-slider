import { __ } from "@wordpress/i18n";

export default function SlideList({ slides, currentIndex, onSelect, onAdd }) {
  return (
    <aside className="oocakfs-slide-list">
      <div className="oocakfs-slide-list__header">
        {__("Slides", "topdown-slider")}
      </div>

      <ul className="oocakfs-slide-list__items">
        {slides.map((slide, i) => (
          <li key={slide.id}>
            <button
              type="button"
              className={`oocakfs-slide-list__item${
                i === currentIndex ? " is-active" : ""
              }`}
              onClick={() => onSelect(i)}
            >
              <span className="oocakfs-slide-list__index">{i + 1}</span>
              <span
                className="oocakfs-slide-list__thumb"
                style={
                  slide.imageUrl
                    ? { backgroundImage: `url(${slide.imageUrl})` }
                    : undefined
                }
              />
              <span className="oocakfs-slide-list__title">
                {slide.title || slide.label || __("Untitled", "topdown-slider")}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className="oocakfs-slide-list__add" onClick={onAdd}>
        {__("+ Add Slide", "topdown-slider")}
      </button>
    </aside>
  );
}
