import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit'

export default function App() {
  return (
    <MDBFooter className="text-center text-white">
      <MDBContainer className="p-4"></MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        © 2023 Copyright: 
        <a className="text-white" href="https://www.linkedin.com/in/abethelse/">
          LinkedIn
        </a>
        <br></br>
        <a className="text-white" href="https://github.com/abethel912">
          GitHub
        </a>
      </div>
    </MDBFooter>
  )
}
