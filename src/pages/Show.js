import { Link, useLoaderData } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

// destructuring the props needed to get our post, including router prop match
const Show = () => {
const card = useLoaderData()

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: 'center',
    border: '3px solid green',
    width: '80%',
    margin: '30px auto'
  }

  return (
    <div style={div}>
      <h1>{card.name}</h1>
      <img src={card.img} alt="" />
      <h2>{card.description}</h2>
      <p>{card.address}</p>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  )
}

export default Show
