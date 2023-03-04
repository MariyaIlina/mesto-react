import React from "react";
function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className={`popup__container popup__container_${name}`}>
        <button onClick={onClose} className={`popup__close popup__close_${name}`} type="button" aria-label="close"></button>
        <form className={`popup__content popup__content_${name}`} name="form">
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
