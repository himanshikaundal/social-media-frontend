
import { ADD_FEED, COMMENT, GET_FEED } from "../types";

const initialstate = {
    post:[],
    comment:''
}


const feedReducer = (state = initialstate, action) => {

    switch (action.type) {
      
        case GET_FEED:
            let feed = action.payload;
            return { post: feed }

        case COMMENT:
            return { comment: action.payload };

        default:
            return state;

    }

}

export default feedReducer