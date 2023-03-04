import React from "react";

function Card({onCardClick, card, link, name, like}) {
  function handleClick() {
     onCardClick(card);
  } 
  return (
    <div className="element">
      <img className="element__mask-group"  onClick={handleClick} src={link} alt={name}  />
      <button className="element__delete" type="button" arial-label="delete"></button>
      <div className="element__group">
        <h2 className="element__text">{name}</h2>
        <div className="element__group-like">
          <button className="element__like" type="button" aria-label="like"></button>
          <span className="element__like-counter">{like.length}</span>
        </div>
      </div>
    </div>
  )
}
export default Card