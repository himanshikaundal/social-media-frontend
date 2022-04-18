
import api from "../../api";
export const postFeed=(values)=>(dispatch)=>{

   api({
       method:post,
       url:'/:id/feed',
       data:{
           

       }
   })

}