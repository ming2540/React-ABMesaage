let initial = {messageA : false , messageB : false}

const reducer = (state = initial , action) => {
    switch(action.type){
        case 'ADD_A' : 
            console.log('ADD_A')
            return state
        case 'ADD_B' :
            return state
        case 'HIDE ALL' : 
            return state
        default :
            return state
    }

}

export default reducer;
