import { dummyGame } from "../../data/dummyGame"


const initialState = {
    game: dummyGame
}


export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_GAME':
            return { ...state, game: action.payload }

        case 'SET_AFTER_PICK_COIN_STACK':
            const { gold } = action.payload
            const newStack = { ...action.payload }
            delete newStack.gold
            return { ...state, gemStack: newStack, goldStack: gold }

        default:
            return state
    }
}
