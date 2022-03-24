import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { PickCoin } from './PickCoin'


export const StackCoin = ({ gemStack, goldStack }) => {
    const { emerald, sapphire, ruby, diamond, onyx } = gemStack
    const [coinStack, setCoinStack] = useState({ emerald, sapphire, ruby, diamond, onyx, gold: goldStack })
    const [pickCoin, setPickCoin] = useState({ emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 })
    const [pickCoinCount, setPickCoinCount] = useState(0)

    const dispatch = useDispatch()


    // Update all states
    const updatePick = async (coin, isIncrease) => {
        const stackDiff = isIncrease ? -1 : 1
        const pickDiff = isIncrease ? 1 : -1

        await Promise.all([
            setCoinStack({ ...coinStack, [coin]: coinStack[coin] + stackDiff }),
            setPickCoin({ ...pickCoin, [coin]: pickCoin[coin] + pickDiff }),
            setPickCoinCount(pickCoinCount + pickDiff)
        ])
    }


    const onPickGem = gem => {
        // If player already picked gold - return
        if (pickCoin.gold) return

        // If player pick unavailable gem - return
        if (!coinStack[gem]) return

        // If player pick three same gem - return
        if (pickCoin[gem] >= 2) return

        // If player pick two different gems and try picking second of one of them - return gem to stack
        if (pickCoinCount === 2 && pickCoin[gem]) return

        // If Player already pick 3 gem - return
        const pickedGem = { ...pickCoin }
        delete pickedGem.gold
        const pickedGemCount = Object.values(pickedGem).reduce((a, b) => a + b)
        if (pickedGemCount >= 3) return

        // If player pick second same gem when there are less then 3 available - return gem to stack
        if (pickCoin[gem] && (coinStack[gem] < 3)) {
            updatePick(gem, false)
            return
        }

        // If player can't pick two same gem (less than 3 available) and already picked one - return gem to stack
        if ([pickCoin[gem] === 1 && coinStack[gem] < 3]) updatePick(gem, false)

        // Can pick gem
        updatePick(gem, true)
    }


    const onPickGold = () => {
        // If no gold on stack - return
        if (!coinStack.gold) return

        // If player already picked a gem - return
        if (pickCoinCount && !pickCoin.gold) return

        // If player already picked gold - return it to coin stack
        if (pickCoinCount && pickCoin.gold) updatePick('gold', false)

        // Can pick gold
        else updatePick('gold', true)
    }


    // Clear all states
    const onClearPick = async () => {
        await Promise.all([
            setCoinStack({ emerald, sapphire, ruby, diamond, onyx, gold: goldStack }),
            setPickCoin({ emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 }),
            setPickCoinCount(0)
        ])
    }


    // Update store and clean states
    const onApprovePick = async () => {
        dispatch({ type: 'SET_PLAYER_COIN', payload: pickCoin })
        await Promise.all([
            setPickCoin({ emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 }),
            setPickCoinCount(0)
        ])
    }


    return (
        <>
            <div onClick={() => onPickGem('emerald')}>Emerald: {coinStack.emerald}</div>
            <div onClick={() => onPickGem('sapphire')}>Sapphire: {coinStack.sapphire}</div>
            <div onClick={() => onPickGem('ruby')}>Ruby: {coinStack.ruby}</div>
            <div onClick={() => onPickGem('diamond')}>Diamond: {coinStack.diamond}</div>
            <div onClick={() => onPickGem('onyx')}>Onyx: {coinStack.onyx}</div>
            <div onClick={onPickGold}>Gold: {coinStack.gold}</div>

            {pickCoinCount > 0 && (
                <>
                    <PickCoin pickCoin={pickCoin} updatePick={updatePick} />
                    <div>
                        <button onClick={onApprovePick}>Approve</button>
                        <button onClick={onClearPick}>Cancel</button>
                    </div>
                </>
            )}
        </>
    )
}