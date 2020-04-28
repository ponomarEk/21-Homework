import { FETCH_USERS_DATA_SUCCESS , PUSH_USERS_DATA_SUCCESS , FETCH_TWEETS_DATA_SUCCESS , PUSH_TWEETS_DATA_SUCCESS }  from '../App';


export function fetchUsersDataSuccess(obj){
    return {
        type: FETCH_USERS_DATA_SUCCESS,
        payload:obj
    }
}

export  function fetchUsersData(url){
    return (dispatch)=>{
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response=>response.json())
        .then(  obj=>{
             dispatch(fetchUsersDataSuccess(obj.data))
        })

    }
}

export  function fetchTweetsData(url){
    return async(dispatch)=>{
        await fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response=>response.json())
        .then( obj=>{
             dispatch(fetchTweetsDataSuccess(obj.data))
        })

    }
}

export function pushUsersDataSuccess(data){
    console.log(data)
    return{
        type: PUSH_USERS_DATA_SUCCESS,
        payload: data
    }
}

export function fetchTweetsDataSuccess(obj){
    return {
        type: FETCH_TWEETS_DATA_SUCCESS,
        payload: obj
    }
}
  
export function pushTweetsDataSuccess(data){
    console.log(data)
    return {
        type: PUSH_TWEETS_DATA_SUCCESS,
        payload: data
    }
}
    