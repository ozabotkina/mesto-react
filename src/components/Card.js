
function Card (props) {
  
  const handleClick = () => {props.onCardClick(props.card)};
  
      return(
          <div className="element" id={props.id}
           onClick={handleClick.bind(this)}
           >
          <button className="element__trash interactive" type="button"/>
          <div className="element__image" style={{ backgroundImage: `url(${props.link})`}}/>
          <div className="element__words">
            <h2 className="element__title">{props.name}</h2>
            <div className="element__like-info">
            <button className="element__like interactive" type="button"/>
            <p className="element__like-number">{props.likes.length}</p>
            </div>
            </div>
         </div>   
          );
  }

export default Card;