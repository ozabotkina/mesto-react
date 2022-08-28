import React from "react";

class Card extends React.Component {
constructor (props){
  super(props);
  this.handleClick = this.handleClick.bind(this);
} 


handleClick = () => {this.props.onCardClick(this.props.card)};


render() {
    return(
        <div className="element" id={this.props.id}
         onClick={this.handleClick}
         >
        <button className="element__trash interactive" type="button"></button>
        <div className="element__image" style={{ backgroundImage: `url(${this.props.link})`}}></div>
        <div className="element__words">
          <h2 className="element__title">{this.props.name}</h2>
          <div className="element__like-info">
          <button className="element__like interactive" type="button"></button>
          <p className="element__like-number">{this.props.likes.length}</p>
          </div>
          </div>
       </div>   
        );} 
}

export default Card;