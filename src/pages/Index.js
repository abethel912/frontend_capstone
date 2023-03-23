import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'
import { Form } from 'react-router-dom'
import Navigation from '../components/Navigation'
import 'bootstrap'
import '../App.css'



const Index = (props) => {
  const activities = useLoaderData()
  
  return (
    <>
      <Navigation />
      <h1>NE Getaway</h1>
      <div style={{ textAlign: 'center' }}>
        <h2>Create a Activity</h2>
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
      </div>
      {activities.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </>
  )
}

export default Index

