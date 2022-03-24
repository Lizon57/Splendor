import { gameDB } from '../data/gameDB'

async function getById(id) {
    const game = gameDB.filter(game => game._id === id)

    // For debugging: 
    // Resolve after delay
    // return new Promise(res => {
    //     setTimeout(() => res(game), 2000)
    // })

    // Reject:
    // throw 'Initiated error'

    // All fixed behavior:
    return game
}


function getNextActivePlayerIdx(players, playerTrnIdx) {
    let nextActivePlayerIdx = -1

    if (playerTrnIdx === 0) {
        const slicedPlayers = players.slice(1)
        nextActivePlayerIdx = slicedPlayers.findIndex(player => player.isActive === true) + 1
    }

    else if (playerTrnIdx === 1) {
        const slicedPlayers = players.slice(2)
        nextActivePlayerIdx = slicedPlayers.findIndex(player => player.isActive === true) + 2

        if (nextActivePlayerIdx === -1 && players[0].isActive) nextActivePlayerIdx = 0
    }

    else if (playerTrnIdx === 2) {
        if (players[3]?.isActive) nextActivePlayerIdx = 3
        else {
            const slicedPlayers = players.slice(0, 1)
            nextActivePlayerIdx = slicedPlayers.findIndex(player => player.isActive === true)
        }
    }

    else {
        const slicedPlayers = players.slice(0, 3)
        nextActivePlayerIdx = slicedPlayers.findIndex(player => player.isActive === true)
    }

    return nextActivePlayerIdx
}



export const gameService = {
    getById,
    getNextActivePlayerIdx
}