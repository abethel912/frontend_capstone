import { Form, Link, useLoaderData} from 'react-router-dom'
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
    border: '5px solid',
    width: '100%',
    margin: '30px auto'
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{card.name}</h1>
      <img src={card.img} alt="" />
      <p>{card.description}</p>
      <p>{card.address}</p>
      <Form action={`/update/${card.id}`} method="post">
        <input
          type="text"
          name="name"
          placeholder="recipe"
          defaultValue={card.name}
        />
        <input
          type="text"
          name="img"
          placeholder="image URL"
          defaultValue={card.img}
        />
        <input
          type="text"
          name="cuisine"
          placeholder="cuisine"
          defaultValue={card.cuisine}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="ingredients"
          defaultValue={card.ingredients}
        />
        <input
          type="text"
          name="directions"
          placeholder="directions"
          defaultValue={card.directions}
        />
        <input
          type="text"
          name="time"
          placeholder="time"
          defaultValue={card.time}
        />
        <button>Update Recipe</button>
      </Form>
      <Form action={`/delete/${card.id}`} method="post">
        <button>Delete Recipe</button>
      </Form>
      <div style={div}>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default Show
