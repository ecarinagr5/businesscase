import React from 'react'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'
import Firestore from './Firestore'

const  Admin = (props) => {

  const [ user, setUser ] = React.useState(null)

  //Ruta Restrict
  React.useEffect(() => {
    if(auth.currentUser) {
      console.log('Existe user')
      setUser(auth.currentUser)
    } else {
      console.log('No existe')
      props.history.push('/admin')
    }
  },[props.history])

  return (
    <div className="mt-5">
      <h3 className="text-center">Ruta Protegida IPC GBM</h3>

    </div>
  )
}

export default withRouter (Admin)
