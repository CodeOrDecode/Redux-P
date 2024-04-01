import { INCREMENT } from "./actionitems"

let initialValue = {count:0}

export function countreducer(state = initialValue,{type,payload}){
    switch(type){
        case INCREMENT:{
            return {count : state.count+payload}
        }
        default:{
            return state
        }
    }

}