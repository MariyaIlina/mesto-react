import React from 'react';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card';
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, userAvatar, userDescription, userName }) {
  const [user, setUser] = React.useState({})
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUser(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }, [])
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    api.getImages(cards)
      .then((res) => {
        console.log('=>', res)
        setCards(res);
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <main className="content">
      <section className="profile root__profile">
        <img src={user.avatar} className="profile__avatar" name="avatar" alt={user.name} />
        <button className="profile__avatar-edit" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div>
            <h1 className="profile__name">{user.name}</h1>
            <p className="profile__text">{user.about}</p>
          </div>
          <button className="profile__edit" onClick={onEditProfile} type="button" aria-label="edit"></button>
        </div>
        <button className="profile__add" onClick={onAddPlace} type="button" aria-label="add"></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            name={card.name}
            link={card.link}
            like={card.likes}
            key={card._id}
            onCardClick={onCardClick}
            card={card}
          />
        ))}
      </section>
    </main>
  )
}
export default Main