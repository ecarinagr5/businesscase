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
export const gitDataAction = ( searchValue  ) => async (dispatch) => {
        try {
            const res = await axios.get(`https://api.github.com/search/users?q=${ searchValue ? searchValue : 'ecarinagr5' }`)
            dispatch({
                type: GET_DATAGIT_SUCCESSFULL,
                data: res.data.items[0]
            })
        } catch (error) {
            console.log(error)
        }
    

}