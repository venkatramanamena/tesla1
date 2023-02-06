const initialstate=[];



export default function reducer(state=initialstate,action){
    const {type,payload}=action;
    switch(type){
        case "add":
            return [...state,payload]
            case "remove":
                return state.filter(product=>product.Name!==payload.name)
                default :
                return state
    }
}