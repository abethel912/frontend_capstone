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
    margin: '45px auto'
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{card.name}</h1>
      <div style={div}>
        <img src={card.img} alt="" />
        <p>{card.activityType}</p>
        <p>{card.state}</p>
        <p>{card.description}</p>
        <p>{card.address}</p>
      </div>
      <Form action={`/update/${card.id}`} method="post">
        <input
          type="text"
          name="name"
          placeholder="activity"
          defaultValue={card.name}
        />
        <img
          class="rounded-circle shadow-4-strong"
          alt="avatar2"
          src="image.png"
        />
        <input
          type="text"
          name="img"
          placeholder="image URL"
          defaultValue={card.img}
        />
        <input
          type="text"
          name="activityType"
          placeholder="activityType"
          defaultValue={card.activityType}
        />
        <input
          type="text"
          name="state"
          placeholder="state"
          defaultValue={card.state}
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
        <button>Update Activity</button>
      </Form>
      <br></br>
      <Form action={`/delete/${card.id}`} method="post">
        <button>Delete Activity</button>
      </Form>
      <br></br>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  )
}

export default Show
