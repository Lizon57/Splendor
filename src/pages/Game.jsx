import { useSelector } from "react-redux"

import { StackCoin } from "../cmps/game/coins/stack/StackCoin"
import { PlayerCoin } from "../cmps/game/coins/player/PlayerCoin"


export const Game = () => {
    const { game } = useSelector(state => state.gameModule)
    const { gemStack, goldStack, players, playerTrnIdx } = game


    return (
        <>
            <b>Stack</b>:
            <StackCoin gemStack={gemStack} goldStack={goldStack} playerTrnIdx={playerTrnIdx} />

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