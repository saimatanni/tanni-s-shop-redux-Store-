import { Action_types  } from "../contants/Actions_types"
export const setProducts =(products)=>{
    return{
        type: Action_types.Set_Products,
        payload: products
    }
}

export const selectedProducts =(products)=>{
    return{
        type: Action_types.Selected_Products,
        payload: products
    }
}

export const RemoveselectedProducts =(products)=>{
    return{
        type: Action_types.Remove_Selected_Products,
        
    }
}