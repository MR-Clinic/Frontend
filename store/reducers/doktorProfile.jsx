const initState = {}

const doctorProfile = (state = initState, action) => {
    if (action.type === "set_doctor_profile"){
        return action.payload
    }
    
    return state;
}

export default doctorProfile;