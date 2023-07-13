/* Props.children- You can use props.children on components that represent ‘generic boxes’ 
and that don’t know their children ahead of time. What this.props.children does is that it is used to 
display whatever you include between the opening and closing tags when invoking a component. */
import './Card.css'
function Card(props){
    const classes = 'card '+ props.className; /* we need to make a special classes const that takes values of other classnames 
                                                since div can take value of multiple classes but "Card" container cannot*/
   return <div className={classes}>{props.children}</div>; // this is a wrapper that is used around other jsx elements
}

export default Card;