interface actionAdd{
    type : string,
    payload: string
}

interface actionRemove{
    type: string,
    payload: number
}

type action = actionAdd | actionRemove;

type filterr = () => boolean;

const todoReduce= (state :string[] = [], action : action) => {
    if(action.type === "ADD_TODO"){
        return  [...state,action.payload]
    } else if ( action.type === "REMOVE_TODO" ){
        return  state.filter((_ : string, index : number) : boolean => index != action.payload)
    }
    return state;
}

export default todoReduce;