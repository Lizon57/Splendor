import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import { gameService } from "../services/gameService"
import { utilService } from "../services/utilService"

import { StackCoin } from "../cmps/game/coins/stack/StackCoin"
import { PlayerCoin } from "../cmps/game/coins/player/PlayerCoin"
import { PackageLst } from "../cmps/game/cards/PackageLst"


export const Game = () => {
    const [loadingState, setLoadingState] = useState({ isLoading: true, err: '' })
    const [currPlayerCoin, setCurrPlayerCoin] = useState()

    const { id } = useParams()
    const dispatch = useDispatch()
    const { game } = useSelector(state => state.gameModule)


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

    const calcCurrPlayerCoin = () => {
        if (!game.trnStatus) return

        let playerCoinStatus = game.players[game.trnStatus.playerTrnIdx].status
        playerCoinStatus = utilService.concatNumObj(playerCoinStatus.ownGemFixed, playerCoinStatus.ownGemFluid)
        setCurrPlayerCoin(playerCoinStatus)
    }
    useEffect(calcCurrPlayerCoin, [game])


    if (loadingState.isLoading) return <>Loading</>
    if (loadingState.err) return <>{loadingState.err}</>
    if (!Object.keys(game)) return <>Error</>


    const { playerTrnIdx, players,
        coinStack: { gem, gold },
        card: { dev: { stack: stackDevCard, shown: shownDevCard }, nobles } } = game

    return (
        <>
            <b>Stack</b>:
            <StackCoin gemStack={gem} goldStack={gold} /><br />

            <b>Nobels</b>:<br />
            {nobles.map(noble => <div key={Math.random()}>{JSON.stringify(noble, null, 1)}</div>)}<br />

            <b>Dev cards</b>:<br />
            <PackageLst stack={stackDevCard} shown={shownDevCard} currPlayerCoin={currPlayerCoin} /><br />

            <b>Players</b>:
            {players.map((player, idx) => {
                const { status: { ownGemFluid, ownGemFixed, ownGold } } = player
                return (
                    <div key={player.miniUser.playerId}>
                        <div>
                            {idx === playerTrnIdx ? '(Turn)' : ''}
                            {player.isActive ? '(Active)' : ''}
                            <b>{player.miniUser.displayName}</b>:
                        </div>
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