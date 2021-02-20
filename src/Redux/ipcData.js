import axios from 'axios'

//CONTANTS
//Receive data
const data = {
    array : [],
    offset: 0
}

//TYPES
const GET_DATA_SUCCESSFULL  = 'GET_DATA_SUCCESSFULL'

//REDUCERS
export default function ipcReducer( state = data, action ) {
    switch( action.type ){
        case GET_DATA_SUCCESSFULL:
            //send data to array data
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//ACTIONS 

//asyn to call API
export const getDataAction = () => async (dispatch) => {

    if( localStorage.getItem('offset=0') ) {
        console.log('Local Storage Data')
        dispatch({
            type: GET_DATA_SUCCESSFULL,
            payload: JSON.parse(localStorage.getItem('offset=0')) //with JSON change array to JSON
        })
        return
    }

    try {
        const res = await axios.get('https://api.github.com/search/users?q=ecarinagr5')
        console.log('API Storage')
        dispatch({
            type: GET_DATA_SUCCESSFULL,
            payload: res.data
        })
        //The goal is use localstorage to avoid force call API and keep the performance
        localStorage.setItem('offset=0', JSON.stringify(res.data)) //with JSON change array to JSON
    } catch (error) {
        console.log(error)
    }

}

export const getDetailsAction = () => async (dispatch, getState) => {

}