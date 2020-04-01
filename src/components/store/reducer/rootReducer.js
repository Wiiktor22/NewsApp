const initialState = {
    storeData: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === "DOWNLOAD") {
        return {
            ...state,
            storeData: action.storeData
        }
    }
    return state
}

export default rootReducer;