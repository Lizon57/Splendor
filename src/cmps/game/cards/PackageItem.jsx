import { useState } from "react"
import { useSelector } from "react-redux"

import { PackageIndicator } from "./PackageIndicator"
import { CardPreview } from "./CardPreview"


export const PackageItem = ({ stack, shown, currPlayerCoin }) => {
    const { game } = useSelector(state => state.gameModule)
    const [pickCard, setPickCard] = useState()

    const onPickCard = card => {
        const { cost } = card
        let isAblePicking = true
        Object.keys(cost).forEach(key => {
            if (cost[key] > currPlayerCoin[key]) isAblePicking = false
        })
        if (!isAblePicking) return


        console.log('Able picking')
    }

    return (
        <>
            <PackageIndicator cardCount={stack.length} />

            {shown.map(card => <CardPreview
                key={Math.random()}
                card={card}
                onPickCard={onPickCard}
            />)}
        </>
    )
}