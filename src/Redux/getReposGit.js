import axios from 'axios'

//CONTANTS
//Receive data
const data = {
    array : []
}
//TYPES
const GET_REPOS_SUCCESSFULL  = 'GET_REPOS_SUCCESSFULL'

//REDUCERS
export default function gitRepoReducer( state = data, action ) {
    switch( action.type ){
        case GET_REPOS_SUCCESSFULL:
            //send data to array data
            return { ...state, array: action.data  }
        default:
            return state
    }
}

//ACTIONS 

//asyn to call API
export const gitReposAction = ( searchValue ) => async (dispatch) => {

        try {
            const res = await axios.get(`https://api.github.com/users/${ searchValue }/repos`)
            dispatch({
                type: GET_REPOS_SUCCESSFULL,
                data: res.data
            })
        } catch (error) {
            console.log(error)
        }

}