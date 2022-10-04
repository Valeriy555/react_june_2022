const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'inc':
            return {...state,count_1: state.count_1 +1 }
        case 'dec':
            return {...state,count_1: state.count_1 -1 }
        case 'reset':
            return {...state,count_1: 0 }
        case 'install':
            return {...state,count_1: action.payload }

        case 'inc2':
            return {...state,count_2: state.count_2 +2 }
        case 'dec2':
            return {...state,count_2: state.count_2 -2 }
        case 'reset2':
            return {...state,count_2: 2}
        case 'install5':
            return {...state,count_2: action.payload }
        default:
            return state
    }
}
export default reducer;