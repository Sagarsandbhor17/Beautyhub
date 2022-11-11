const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
        
            const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
             //quantity
            if(IteamIndex >= 0){
                state.carts[IteamIndex].quantity +=1
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else{
                const temp = {...action.payload,quantity:1}
                 return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case "DEL_CART":
            const data = state.carts.filter((ele) => ele.id != action.payload)
            return {
                ...state,
                carts:data
            }
        
        //individual item
            case "RMV_ONE":
                const ItemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
       
                if(state.carts[ItemIndex_dec].quantity >= 1){
                    const dltiteams = state.carts[ItemIndex_dec].quantity -= 1
                    console.log([...state.carts,dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[ItemIndex_dec].quantity === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }
                
           
        default:
            return state
    }
    
}