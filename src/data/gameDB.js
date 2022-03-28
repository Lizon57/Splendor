import { utilService } from "../services/utilService"

import { devCardDB } from "./devCardDB"
import { nobleCardDB } from "./nobleCardDB"


export const gameDB = [
    {
        _id: 'gameI0001',

        winScore: 15,

        card: {
            dev: {
                stack: {
                    firstLevelCards: devCardDB.firstLevel.slice(3),
                    secondLevelCards: devCardDB.secondLevel.slice(3),
                    thirdLevelCards: devCardDB.thirdLevel.slice(3),
                },
                shown: {
                    firstLevelCards: [
                        {
                            point: 0,
                            gem: 'onyx',
                            cost: { emerald: 0, sapphire: 2, ruby: 1, diamond: 2, onyx: 0 }
                        },
                        {
                            point: 0,
                            gem: 'ruby',
                            cost: { emerald: 1, sapphire: 1, ruby: 0, diamond: 1, onyx: 1 }
                        },
                        {
                            point: 0,
                            gem: 'emerald',
                            cost: { emerald: 0, sapphire: 1, ruby: 2, diamond: 0, onyx: 2 }
                        },
                        {
                            point: 0,
                            gem: 'onyx',
                            cost: { emerald: 3, sapphire: 0, ruby: 0, diamond: 0, onyx: 0 }
                        }
                    ],
                    secondLevelCards: [
                        {
                            point: 2,
                            gem: 'emerald',
                            cost: { emerald: 0, sapphire: 2, ruby: 0, diamond: 4, onyx: 1 }
                        },
                        {
                            point: 3,
                            gem: 'diamond',
                            cost: { emerald: 0, sapphire: 0, ruby: 0, diamond: 6, onyx: 0 }
                        },
                        {
                            point: 2,
                            gem: 'emerald',
                            cost: { emerald: 0, sapphire: 5, ruby: 0, diamond: 3, onyx: 0 }
                        },
                        {
                            point: 2,
                            gem: 'diamond',
                            cost: { emerald: 1, sapphire: 0, ruby: 4, diamond: 0, onyx: 2 }
                        }
                    ],
                    thirdLevelCards: [
                        {
                            point: 5,
                            gem: 'ruby',
                            cost: { emerald: 7, sapphire: 0, ruby: 3, diamond: 0, onyx: 0 }
                        },
                        {
                            point: 3,
                            gem: 'onyx',
                            cost: { emerald: 5, sapphire: 3, ruby: 3, diamond: 3, onyx: 0 }
                        },
                        {
                            point: 4,
                            gem: 'ruby',
                            cost: { emerald: 7, sapphire: 0, ruby: 0, diamond: 0, onyx: 0 }
                        },
                        {
                            point: 3,
                            gem: 'diamond',
                            cost: { emerald: 3, sapphire: 3, ruby: 5, diamond: 0, onyx: 3 }
                        }
                    ],
                }
            },
            nobles: [
                { cost: { emerald: 3, sapphire: 3, ruby: 0, diamond: 3, onyx: 0 } },
                { cost: { emerald: 3, sapphire: 3, ruby: 3, diamond: 0, onyx: 0 } },
                { cost: { emerald: 0, sapphire: 0, ruby: 3, diamond: 3, onyx: 3 } }
            ]
        },

        coinStack: {
            gem: { emerald: 2, sapphire: 4, ruby: 4, diamond: 4, onyx: 4 },
            gold: 5,
        },

        trnStatus: {
            isGameOn: true,
            playerTrnIdx: 0,
            phase: 1
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
                    ownGemFluid: { emerald: 2, sapphire: 0, ruby: 3, diamond: 2, onyx: 0 },
                    ownGemFixed: { emerald: 1, sapphire: 1, ruby: 1, diamond: 0, onyx: 0 },
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