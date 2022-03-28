import { utilService } from "../services/utilService"

import { devCardDB } from "./devCardDB"
import { nobleCardDB } from "./nobleCardDB"


export const gameDB = [
    {
        _id: 'gameI0001',

        winScore: 15,

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

        coinStack: {
            gem: { emerald: 2, sapphire: 4, ruby: 4, diamond: 4, onyx: 4 },
            gold: 5,
        },

        trnStatus: {
            isGameOn: true,
            playerTrnIdx: 0,
            phase: 0
        },

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
                    ownGemFluid: { emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0 },
                    ownGemFixed: { emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0 },
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

            // {
            //     miniUser: {
            //         playerId: utilService.makeId(),
            //         displayName: 'Hokus Pokus',
            //         avatarUrl: 'https://robohash.org/Hokus Pokus?set=set2'
            //     },

            //     isActive: true,
            //     point: 0,

            //     status: {
            //         ownGemFluid: { emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0 },
            //         ownGemFixed: { emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0 },
            //         ownGold: 0,
            //         ownCard: {
            //             firstLevelCards: [],
            //             secondLevelCards: [],
            //             thirdLevelCards: [],
            //         },
            //         ownNobles: [],
            //         remainTime: 1000 * 60 * 20
            //     }
            // }
        ]
    }
]