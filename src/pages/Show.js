import { Link, useLoaderData, Form } from 'react-router-dom'
import Navigation from '../components/Navigation'

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
      <h2>{card.activityType}</h2>
      <div style={{ textAlign: 'center' }}>
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
            placeholder="state"
            defaultValue={card.state}
          />
          <input
            type="text"
            name="activityType"
            placeholder="activity type"
            defaultValue={card.activityType}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            defaultValue={card.description}
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            defaultValue={card.address}
          />
          <button>Update Recipe</button>
        </Form>
        <Form action={`/delete/${card.id}`} method="post">
          <button>Delete Recipe</button>
          
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default Show
