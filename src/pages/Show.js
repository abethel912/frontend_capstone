import { Link, useLoaderData } from 'react-router-dom'

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
      <h1>{card.subject}</h1>
      <h2>{card.details}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default Show
