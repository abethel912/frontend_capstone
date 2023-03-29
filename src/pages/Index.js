import Card from '../components/Card'
import { useLoaderData, Form } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


const Index = (props) => {

  

  const activities = useLoaderData()

  return (
    <>
      <Navigation />
      {activities.map((card) => (
        <Card card={card} key={card.id} />
      ))}
      <Form action="/create" method="post">
        <input type="text" name="name" placeholder="activity" />
        <input type="text" name="img" placeholder="URL here" />
        <input type="text" alt="" name="state" placeholder="state" />
        <input
          type="text"
          alt=""
          name="activityType"
          placeholder="activity type"
        />
        <input type="text" name="description" placeholder="description" />
        <input type="text" alt="" name="address" placeholder="address" />
        <button>Create New Activity</button>
      </Form>
      <Footer />
    </>
  )
}

export default Index
