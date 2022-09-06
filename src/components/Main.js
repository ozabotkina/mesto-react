import {api} from '../utils/API.js'
import Card from '../components/Card.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CurrentUserContext } from './CurrentUserContext.js';

function Main(props){
  
const currentUser = React.useContext(CurrentUserContext);

    return (      
        <main className="content">
        <section className="profile">
          <div className ="profile__avatar-wrap" onClick={props.onEditAvatar}>
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
            <img className="profile__edit" src="./images/pencil.svg" />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrap">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="edit-button interactive" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>    
          <button className="add-button interactive" type="button" onClick={props.onAddPlace}></button>
        </section>    
    
        <section className="elements">
          {props.cards.map((card, i) => 
          <Card 
          card = {card} 
          key = {card._id} 
          onCardClick={props.onCardClick} 
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}/>)}          
        </section>
      </main>
    )
}

export default Main