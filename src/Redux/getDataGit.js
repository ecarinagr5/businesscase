import axios from 'axios'

//CONTANTS
//Receive data
const data = {
    array : [],
    offset: 0
}

//TYPES
const GET_DATAGIT_SUCCESSFULL  = 'GET_DATAGIT_SUCCESSFULL'

//REDUCERS
export default function gitReducer( state = data, action ) {
    switch( action.type ){
        case GET_DATAGIT_SUCCESSFULL:
            //send data to array data
            return { ...state, array: action.data  }
        default:
            return state
    }
}

//ACTIONS 

//asyn to call API
export const gitDataAction = (searchValue) => async (dispatch) => {
    console.log("searchValue",searchValue)

    try {
        /*const res = await axios.get('https://api.github.com/search/users?q=ecarinagr5')*/
        //https://api.github.com/users/ecarinagr5/repos
        const res = await axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        dispatch({
            type: GET_DATAGIT_SUCCESSFULL,
            data: res.data
        })
        //The goal is use localstorage to avoid force call API and keep the performance
        localStorage.setItem('offset=0', JSON.stringify(res.data)) //with JSON change array to JSON
    } catch (error) {
        console.log(error)
    }

}