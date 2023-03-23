import { Link } from 'react-router-dom'

//destructure the post from props
const Card = ({ card }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: 'center',
    border: '3px solid',
    margin: '10px auto',
    width: '80%'
  }
  return (
    <div style={div}>
      <Link to={`/${card.id}`}>
        <h1>{card.name}</h1>
      </Link>
      <img src={card.img} className="recipe-image" alt="" />
      <p>State: {card.state}</p>
      <p>Activity Type: {card.activityType}</p>
    </div>
  )
}

export default Card
