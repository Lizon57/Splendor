import { dummyGame } from "../data/dummyGame"

import { StackCoin } from "../cmps/game/coins/stack/StackCoin"
import { PlayerCoin } from "../cmps/game/coins/player/PlayerCoin"


export const Game = () => {
    const game = dummyGame
    const { gemStack, goldStack, players } = game


    return (
        <>
            <b>Stack</b>:
            <StackCoin gemStack={gemStack} goldStack={goldStack} />

            <b>Players</b>:
            {players.map(player => {
                const { status: { ownGemFluid, ownGemFixed, ownGold } } = player
                return (
                    <div key={player.miniUser.playerId}>
                        <div><b>{player.miniUser.displayName}</b>:</div>
                        <PlayerCoin
                            gemFluid={ownGemFluid}
                            gemFixed={ownGemFixed}
                            gold={ownGold}
                        />
                    </div>
                )
            })}
        </>
    )
}