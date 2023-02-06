export const adddetails=(Name,Phone)=>async dispatch =>{
    dispatch({
        type:"add",
        payload:Name,Phone
    })
}
export const  deletedetails=(value)=>async dispatch =>{
    dispatch({
        type:"remove",
        payload:{name:value}
    })
}