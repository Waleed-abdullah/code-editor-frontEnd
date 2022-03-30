export const initialState = {
    folderSelected: '/'
}

export const actionTypes = {
    SET_FOLDER: 'SET_FOLDER'
}

const reducer = (initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_FOLDER:
            return {
                ...initialState,
                folderSelected: action.folderSelected
            }
        default:
            return initialState
    }
}

export default reducer