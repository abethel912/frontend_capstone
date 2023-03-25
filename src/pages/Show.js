import { Link, useLoaderData} from 'react-router-dom'
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
    border: '5px solid blue',
    width: '80%',
    margin: '30px auto'
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{card.name}</h1>
      <img src={card.img} alt="" />
      <p>{card.description}</p>
      <p>{card.address}</p>
      <div style={div}>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default Show
