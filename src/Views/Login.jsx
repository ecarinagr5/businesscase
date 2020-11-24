
import React from 'react';
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
      e.preventDefault()

      if(!email.trim()){
        //console.log('Ingrese Email')
        setError('Ingrese Email')
        return
      }
      if(!pass.trim()){
        //console.log('Ingrese Password')
        setError('Ingrese Password')
        return
      }
      if(pass.length < 6 ){
        //console.log('Password mayor a 6 carácteres')
        setError('Password debe ser mayor a 6 carácteres')
        return
      }
      setError(null)
      console.log("todo OK")

      if(esRegistro){
        registrar()
      }
       else {
         login()
       }
    }

    const login = React.useCallback(async() => {
      try {
        const res = await auth.signInWithEmailAndPassword(email, pass)
        console.log(res.user)
        setEmail('')
        setPass('')
        setError(null)
        props.history.push('/admin')

      } catch (error) {
        console.log(error)

        if(error.code === 'auth/user-not-found') {
          setError('Usuario no registrado')
        }
        if(error.code === 'auth/invalid-email') {
          setError('Email no valido')
        }
      }
    },[ email, pass, props.history ])

    //Login, I turn on email my application in Firebase
    const registrar = React.useCallback(async() => {

      try {
        const res = await auth.createUserWithEmailAndPassword(email,pass)
        //console.log(res.user)
        await db.collection('usuarios').doc(res.user.email).set({
          email: res.user.email,
          uid: res.user.uid
        })
        setEmail('')
        setPass('')
        setError(null)
        

      } catch(error) {
          console.log(error)

          if( error.code === 'auth/invalid-email'){
            setError('Email no valido')
          }
          if( error.code === 'auth/email-already-in-use'){
            setError('Email ya registrado')
          }
      }

    }, [email,pass])

    return (
        <div className="mt-5">
            <h3 className="text-center"> 
            
              IPC Indicator <br></br>
              {
                esRegistro ? 'Registro de usuarios' : 'Login de usuarios'
              }
            
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={ procesarDatos }>
                      {
                        error && (
                          <div className="alert alert-danger">
                            { error }
                          </div>
                        )
                      }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange= { e => setEmail(e.target.value) }
                            value= { email }
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Password"
                            onChange = { e => setPass(e.target.value) }
                            value= { pass }
                        />
                        <button 
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            {
                              esRegistro ? 'Registrarse' : 'Inicia Sesión' 
                            }
                        </button>
                        <button 
                            className="btn btn-sm btn-info btn-block"
                            onClick={ () => setEsRegistro(!esRegistro)}
                        >
                            {
                              esRegistro ? '¿Tienes cuenta?' : '¿No tienes cuenta?'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

  export default withRouter (Login);
  

