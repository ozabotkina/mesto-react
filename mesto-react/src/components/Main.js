import {api} from '../utils/API.js'
import Card from '../components/Card.js'
import React from 'react';
import ReactDOM from 'react-dom/client';

function Main(props){

const [userName, setUserName] = React.useState('Жак-Ив');
const [userAvatar, setUserAvatar] = React.useState(' ');
const [userDesctiption, setUserDesctiption] = React.useState('Исследователь');
const [cards, setCards] = React.useState([]);

React.useEffect(()=>{
    api.fetchInitialData()
    .then((res) => {
      setUserName(res.name);
      setUserAvatar(res.avatar);
      setUserDesctiption(res.about);})
    .catch ((err) => {console.log(err)})}   
    , []) ;

React.useEffect(()=>{
  
    api.fetchInitialCards()
    .then ((cards) => {setCards(cards)})
    .catch ((err) => {console.log(err)})},
    [])

    return (      
        <main className="content">
        <section className="profile">
          <div className ="profile__avatar-wrap" onClick={props.onEditAvatar}>
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
            <img className="profile__edit" src="./images/pencil.svg" />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrap">
              <h1 className="profile__name">{userName}</h1>
              <button className="edit-button interactive" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{userDesctiption}</p>
          </div>    
          <button className="add-button interactive" type="button" onClick={props.onAddPlace}></button>
        </section>    
    
        <section className="elements">
          {cards.map((card, i) => <Card card = {card} key={card._id} id={card._id} link={card.link} name={card.name} likes={card.likes} onCardClick={props.onCardClick}/>)}          
        </section>
      </main>
    )
}

export default Main