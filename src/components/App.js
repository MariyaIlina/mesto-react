import React from 'react';
import { useState } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      // userName={setUser.name}
      // userAvatar={setUser.about}
      // userDescription={useEffect}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <input
          className="popup__text popup__text_profile_name"
          name="name"
          required
          placeholder="Введите имя"
          type="text"
          minLength="2"
          maxLength="40"
          id="popup-profile-name" />
        <p className="popup__error">
          <span id="popup-profile-name-error">
          </span>
        </p>
        <input
          className="popup__text popup__text_profile_job"
          name="about"
          required
          placeholder="Введите профессию"
          type="text"
          minLength="2"
          maxLength="200"
          id="popup-profile-job"
        />
        <p className="popup__error">
          <span id="popup-profile-job-error">
          </span>
        </p>

      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        children=""
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__text popup__text_add_name"
          name="name"
          required
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          id="popup-add-name" />
        <p className="popup__error">
          <span id="popup-add-name-error"></span>

        </p>
        <input className="popup__text popup__text_add_link"
          name="link"
          required
          placeholder="Ссылка на картинку"
          id="popup-add-link"
          type="url" />
        <p className="popup__error">
          <span id="popup-add-link-error"></span>
        </p>
      </PopupWithForm>
      <PopupWithForm
        name="user-avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="user-avatar-input"
          className="popup__text popup__text_user-avatar"
          aria-label="Введите ссылку на аватар"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required />
        <p className="popup__error">
          <span id="user-avatar-input-error"></span>
        </p>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div >

  );
}

export default App;
