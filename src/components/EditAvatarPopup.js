import React from "react";
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from './CurrentUserContext.js';


function EditAvatarPopup(props){

    const currentUser = React.useContext(CurrentUserContext)
    const [avatar, setAvatar] = React.useState(currentUser.avatar)
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(avatarRef.current.value);
        props.onUpdateAvatar(
          avatarRef.current.value
    );
      } 
      
return(
    <PopupWithForm 
    name="avatar" 
    title="Обновить аватар" 
    button="Сохранить"
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    onSubmit = {handleSubmit}
    >
    <>
    <input 
    type="url" 
    id="alink" 
    name="avatarlink" 
    className="popup__name popup__input" 
    placeholder="Ссылка на аватар" 
    ref = {avatarRef}
    required />
    <span className="popup__error alink-error popup__error_visible"></span>
    </>
    </PopupWithForm>

)
}

export default EditAvatarPopup