import { utilService } from "../services/utilService"

import { devCards as devCardDB } from "./devCardDB"
import { nobleCardDB } from "./nobleCardDB"


export const dummyGame = {
    _id: utilService.makeId(),

    winScore: 15,
    playerTrnIdx: 0,

    card: {
        dev: {
            stack: devCardDB,
            shownCards: []
        },
        noble: {
            stack: nobleCardDB,
            shownCards: []
        }
    },

    coinStack: { emerald: 4, sapphire: 4, ruby: 4, diamond: 4, onyx: 4, gold: 5 },

    players: [
        {
            miniUser: {
                playerId: utilService.makeId(),
                displayName: 'Abra Kadabra',
                avatarUrl: 'https://robohash.org/Abra Kadabra?set=set2'
            },

            isActive: true,
            point: 0,

            status: {
                ownCoin: { emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 },
                ownCard: {
                    firstLevelCards: [],
                    secondLevelCards: [],
                    thirdLevelCards: [],
                },
                ownNobles: [],
                remainTime: 1000 * 60 * 20
            }
        },

        {
            miniUser: {
                playerId: utilService.makeId(),
                displayName: 'Hokus Pokus',
                avatarUrl: 'https://robohash.org/Hokus Pokus?set=set2'
            },

            isActive: true,
            point: 0,

            status: {
                ownCoin: { emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 },
                ownCard: {
                    firstLevelCards: [],
                    secondLevelCards: [],
                    thirdLevelCards: [],
                },
                ownNobles: [],
                remainTime: 1000 * 60 * 20
            }
        }
    ]
}