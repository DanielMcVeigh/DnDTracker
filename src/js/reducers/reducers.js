import { ADD_PLAYER, REMOVE_PLAYER } from "../constants/actionTypes";

// Set initial state
const initialState = {
    players: [
        {
            playerName: null,
            playerInit: null,
        },
    ],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload]                
            }

        default:
            return state;
    }
}