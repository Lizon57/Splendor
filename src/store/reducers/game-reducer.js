const initialState = {
    game: {}
}


export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_GAME':
            if (Array.isArray(action.payload)) return { ...state, game: action.payload[0] }
            return { ...state, game: action.payload }

        case 'SET_PLAYER_COIN':
            const gameCopy = JSON.parse(JSON.stringify(state.game))
            const { playerTrnIdx } = gameCopy
            let { ownGemFluid } = gameCopy.players[playerTrnIdx].status

            if (action.payload.gold) gameCopy.players[playerTrnIdx].status.ownGold += action.payload.gold
            else {
                const gems = Object.keys(ownGemFluid)
                gems.forEach(gem => ownGemFluid[gem] += action.payload[gem])
            }

            return { ...state, game: gameCopy }


        default: return state
    }
}
