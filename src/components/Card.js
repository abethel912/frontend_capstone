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
      <Link to={`/post/${card.id}`}>
        <h1>{card.subject}</h1>
      </Link>
      <h2>{card.details}</h2>
    </div>
  )
}

export default Card
