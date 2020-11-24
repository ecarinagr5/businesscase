import React from 'react'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'

const  Admin = (props) => {
  console.log(props)
  React.useEffect(() => {
    if(auth.currentUser) {
      console.log('Existe user')
    } else {
      console.log('No existe')
    }
  })

  return (
    <div>
      BIENVENIDO
    </div>
  )
}

export default withRouter (Admin)
