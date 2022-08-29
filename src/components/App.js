
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {

const [isAddCardOpen, setisAddCardOpen] = React.useState(false);
const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({link:'', name:'', isOpen: false});


function handleAddPlaceClick() {
  setisAddCardOpen(true);}

function handleEditProfileClick() {
  setIsEditProfileOpen(true);};

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);};

const handleCardClick = (card) => {
  setSelectedCard({link:card.link, name: card.name, isOpen: true});
}  

function closeAllPopups(){
  setisAddCardOpen(false);
  setIsEditProfileOpen(false);
  setIsEditAvatarPopupOpen(false);
  setSelectedCard({link:'', name:'', isOpen: false});

}

  return (
  <div className="page">
    <Header />
    <Main 
    onEditProfile ={() => handleEditProfileClick()}
    onAddPlace = {() => handleAddPlaceClick()}
    onEditAvatar = {() => handleEditAvatarClick()}
    onCardClick = {handleCardClick}
     />

    <Footer />

    <PopupWithForm 
    name="author" 
    title="Редактировать профиль" 
    button="Сохранить"
    isOpen = {isEditProfileOpen}
    onClose = {() => closeAllPopups()}>
    <>
    <input
      type="text" 
      id="name" 
      name="popup__name" 
      className="popup__name popup__input" 
      minLength="2" 
      maxLength="40" 
      required />
    <span className="popup__error name-error popup__error_visible"></span>
    <input 
      type="text" 
      id="about" 
      name="popup__about" 
      className="popup__about popup__input"  
      minLength="2" 
      maxLength="200" 
      required />
    <span className="popup__error about-error popup__error_visible"></span>
    </>
    </PopupWithForm>
   
    
    <PopupWithForm 
    name="avatar" 
    title="Обновить аватар" 
    button="Сохранить"
    isOpen = {isEditAvatarPopupOpen}
    onClose = {() => closeAllPopups()}>
    <>
    <input 
    type="url" 
    id="alink" 
    name="avatarlink" 
    className="popup__name popup__input" 
    placeholder="Ссылка на аватар" 
    required />
    <span className="popup__error alink-error popup__error_visible"></span>
    </>
    </PopupWithForm>

  

    <PopupWithForm 
    name="new-card" 
    title="Новое место" 
    button="Создать"
    isOpen = {isAddCardOpen}
    onClose = {() => closeAllPopups()}>
    <><input 
    type="text" 
    id="cardname" 
    name="cardname" 
    className="popup__name popup__input" 
    placeholder="Название" 
    minLength="2" 
    maxLength="30" 
    required />
    <span className="popup__error cardname-error popup__error_visible"></span>
    <input 
    type="url" 
    id="link" 
    name="cardlink" 
    className="popup__about popup__input" 
    placeholder="Ссылка на картинку" 
    required />
    <span className="popup__error link-error popup__error_visible"></span>
    </>  
    </PopupWithForm>

   

    <PopupWithForm 
    name="delete-card" 
    title="Вы уверены?" 
    button="Да"
    isOpen = {false}>
    <>
    <input 
    type="text" 
    id="cardname" 
    name="cardname" 
    className="popup__name popup__input" 
    placeholder="Название" 
    minLength="2" 
    maxLength="30" 
    required />
    <span className="popup__error cardname-error popup__error_visible"></span>
    <input 
    type="url" 
    id="link" 
    name="cardlink" 
    className="popup__about popup__input" 
    placeholder="Ссылка на картинку" 
    required />
    <span className="popup__error link-error popup__error_visible"></span>
    </>  
    </PopupWithForm>
    <ImagePopup card = {selectedCard} onClose = {() => closeAllPopups()}/>
        


  </div>
  );
}

export default App;
