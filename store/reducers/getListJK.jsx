const initState= {listJK:[]}

const getListJK = (state = initState, action) =>{
    if (action.type === "set_list_jk"){
        console.log("patload",action.payload);
        return {
            ...state,
            listJK: action.payload,
        }
    }

    return state;
}

export default getListJK;

