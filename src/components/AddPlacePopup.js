import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
    nameRef.current.value = "";
    linkRef.current.value = "";
  }
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      children=""
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__text popup__text_add_name"
        name="name"
        required
        placeholder="Название"
        type="text"
        minLength="2"
        maxLength="30"
        id="popup-add-name"
        ref={nameRef}
      />
      <p className="popup__error">
        <span id="popup-add-name-error"></span>
      </p>
      <input
        className="popup__text popup__text_add_link"
        name="link"
        required
        placeholder="Ссылка на картинку"
        id="popup-add-link"
        type="url"
        ref={linkRef}
      />
      <p className="popup__error">
        <span id="popup-add-link-error"></span>
      </p>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
