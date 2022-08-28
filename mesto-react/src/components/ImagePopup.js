import React from "react";

class  ImagePopup extends React.Component {
  constructor (props){
  super(props);
}

 render(){ 
   
 return (  
   <div className= {this.props.card.isOpen ? "popup image-popup popup_opened" : "popup image-popup"} >
    <div className="image-popup__wrap">
      <button className="popup__close-icon image-popup__close interactive" type="button" onClick = {this.props.onClose}></button>
      <img className="image-popup__image"src={this.props.card.link} alt={this.props.card.name} />
      <p className="image-popup__comment">{this.props.card.name}</p>
    </div>
  </div>  
  )
 }}

export default ImagePopup