import { FETCH_USERS_DATA_SUCCESS , PUSH_USERS_DATA_SUCCESS , FETCH_TWEETS_DATA_SUCCESS , PUSH_TWEETS_DATA_SUCCESS}  from '../App'

let initialState = {
    data:[
    ],
    tweets:[

    ]
}

export const reducer = ( state = initialState, action )=>{
    switch(action.type){

        case FETCH_USERS_DATA_SUCCESS:
            state.data = action.payload;
            return {...state}

        case PUSH_USERS_DATA_SUCCESS:
            state.data.push(action.payload);
            return {...state}

        case FETCH_TWEETS_DATA_SUCCESS:
            return {...state,tweets:action.payload}

        case PUSH_TWEETS_DATA_SUCCESS:
            state.tweets.push(action.payload);
            console.log(state.tweets)
            return {...state}

    }
    return state;
}