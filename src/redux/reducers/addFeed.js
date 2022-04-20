
import { ADD_FEED } from "../types";

const initialstate={
    content:{},
    feed_id:'',
    user_id:''
}


const feedReducer=(state=initialstate,action)=>{

    switch(action.type){
        case ADD_FEED:
            let content=action.payload;
           
            return {content:content}

            default:
                return state;
       
    }

}

export default feedReducer