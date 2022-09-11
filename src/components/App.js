import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { api } from "../utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "Оля",
    avatar: "",
    about: "Учусь",
  });
  const [cards, setCards] = React.useState([]);
  const [isAddCardOpen, setisAddCardOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: "",
    name: "",
    isOpen: false,
  });

  React.useEffect(() => {
    api
      .fetchInitialData()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
      api
      .fetchInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddPlaceClick() {
    setisAddCardOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard({ link: card.link, name: card.name, isOpen: true });
  };

  const handleUserUpdate = (name, about) => {
    api
      .changeAuthorInfo(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateAvatar = (avatarlink) => {
    api
      .changeAvatar(avatarlink)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    const action = isLiked
      ? api.deleteLike(card._id)
      : api.createLike(card._id);

    action
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      }); 
    
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => (c._id !== card._id ? c : "")));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleAddPlaceSubmit = (link, name) => {
    api
      .addNewCard(link, name)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function closeAllPopups() {
    setisAddCardOpen(false);
    setIsEditProfileOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ link: "", name: "", isOpen: false });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={() => handleEditProfileClick()}
          onAddPlace={() => handleAddPlaceClick()}
          onEditAvatar={() => handleEditAvatarClick()}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUserUpdate}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddCardOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          button="Да"
          isOpen={false}
        >
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={() => closeAllPopups()} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
