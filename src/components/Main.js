import Card from "../components/Card.js";
import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext.js";
import pencilPath from "../images/pencil.svg";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const [avatarStyle, setAvatarStyle] = React.useState({zindex: "1", opacity: "1"});

  function handleMouseOver() {
    setAvatarStyle({zindex: "-1", opacity: "0.2"})
  };

  function handleMouseOut() {
    setAvatarStyle({zindex: "1", opacity: "1"})
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap"
         onClick={props.onEditAvatar}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
        >
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})`, zIndex: avatarStyle.zindex, opacity: avatarStyle.opacity}}
          ></div>
          <img className="profile__edit" src= {pencilPath} />
        </div>
        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="edit-button interactive"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="add-button interactive"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((card, i) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
