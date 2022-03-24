import { utilService } from "../services/utilService"

import { devCardDB } from "./devCardDB"
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

    gemStack: { emerald: 5, sapphire: 3, ruby: 4, diamond: 4, onyx: 4 },
    goldStack: 5,

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
                ownGemFluid: { emerald: 1, sapphire: 0, ruby: 3, diamond: 0, onyx: 5 },
                ownGemFixed: { emerald: 0, sapphire: 2, ruby: 0, diamond: 4, onyx: 0 },
                ownGold: 2,
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
                ownGemFluid: { emerald: 0, sapphire: 4, ruby: 0, diamond: 2, onyx: 0 },
                ownGemFixed: { emerald: 5, sapphire: 0, ruby: 3, diamond: 0, onyx: 1 },
                ownGold: 0,
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