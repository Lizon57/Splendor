import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import { gameService } from "../services/gameService"

import { StackCoin } from "../cmps/game/coins/stack/StackCoin"
import { PlayerCoin } from "../cmps/game/coins/player/PlayerCoin"


export const Game = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { game } = useSelector(state => state.gameModule)
    const [loadingState, setLoadingState] = useState({ isLoading: true, err: '' })


    const getGame = async () => {
        if (!loadingState.isLoading) return

        try {
            const game = await gameService.getById(id)
            dispatch({ type: 'SET_GAME', payload: game })
            setLoadingState({ ...loadingState, isLoading: false })
        } catch (err) {
            setLoadingState({ isLoading: false, err })
        }
    }

    useEffect(getGame, [])


    if (loadingState.isLoading) return <>Loading</>
    if (loadingState.err) return <>{loadingState.err}</>
    if (!Object.keys(game)) return <>Error</>


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