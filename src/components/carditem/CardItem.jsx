import React from "react";
import CachedImage from "../cachedimage/CachedImage";

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <CachedImage
              className="cards__item__img"
              alt=""
              src={props.src}
              hasStyles
            />
          </figure>
          <div className="cards__item__info">
            <h5
              className={`cards__item__text_info ${
                props.longHeader ? "cards__item__text_info__long" : ""
              } `}
            >
              {props.text}
            </h5>
          </div>
          <div className="cards__item__info">
            <p className="cards__item__text">{props.info}</p>
          </div>
        </a>
      </li>
    </>
  );
};

export default CardItem;
