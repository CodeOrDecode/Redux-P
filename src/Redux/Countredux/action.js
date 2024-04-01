import { INCREMENT } from "./actionitems";

 export function increment(val){
    return { 
        type:INCREMENT,
        payload:val
    }

}