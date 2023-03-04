function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_preview  ${(Object.entries(card).length > 0) && 'popup_is-opened'}`}>
      <div className="popup__container popup__container-preview">
        <button onClick={onClose} className="popup__close popup__close-preview" type="button" aria-label="close"></button>
        <div>
          <img src={card.link} alt={card.alt} className="popup__img" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </div>
      </div>
    </div>
  )
}
export default ImagePopup
