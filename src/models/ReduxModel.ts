import {createStore} from "redux";

export const reduxReduce=(state:any,action:any)=>{

    switch (action.type) {
        case 'STATUS':return Object.assign({},state,{
            loading:action.loading,
            statusCode:400,

        })
        case 'PULL': return Object.assign({},state,{
            pulledData:action.data,
            isDone:action.isDone,
            state:state

        })
        case 'PUSH': return Object.assign({},state,{
            pushedData:action.data,
            isDone:action.isDone,
            state:state

        })

        default:return  state
    }
}
const store=createStore(reduxReduce)
export const reduxDispatch=(action:any)=>{
    store.dispatch(action)
}
export const reduxSubscribe=(callback:any)=>{
   return  store.subscribe((() => callback(store.getState())))
}
export const reduxUnsubscribe=(callback:any)=>{
    return  store.subscribe((() => callback(store.getState()
    )))
}
