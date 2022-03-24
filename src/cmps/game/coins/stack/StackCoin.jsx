import { useState } from 'react'

export const StackCoin = ({ gemStack, goldStack }) => {
    let { emerald, sapphire, ruby, diamond, onyx } = gemStack
    const [coinStack, setCoinStack] = useState({ emerald, sapphire, ruby, diamond, onyx, gold: goldStack })
    const [pickCoin, setPickCoin] = useState({ emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 })
    const [pickCoinCounter, setPickCoinCounter] = useState(0)



    const onPickGem = async gem => {
        // If player already picked gold - return
        if (pickCoin.gold) return

        // If player pick unavailable gem - return
        if (!coinStack[gem]) return

        // If player pick three same gem - return
        if (pickCoin[gem] >= 2) return

        // If player pick second same gem when there are less then 3 available - return
        if (pickCoin[gem] && (coinStack[gem] < 3)) return

        // If Player already pick 3 gem - return
        const pickedGem = { ...pickCoin }
        delete pickedGem.gold
        const pickedGemCount = Object.values(pickedGem).reduce((a, b) => a + b)
        if (pickedGemCount >= 3) return

        // If player can't pick two same gem (less than 3 available) and already picked one - return gem to stack
        if ([pickCoin[gem] === 1 && coinStack[gem] < 3]) {
            await Promise.all([
                setCoinStack({ ...coinStack, [gem]: coinStack[gem] + 1 }),
                setPickCoin({ ...pickCoin, [gem]: pickCoin[gem] - 1 })
            ])
        }

        // Can pick gem
        await Promise.all([
            setCoinStack({ ...coinStack, [gem]: coinStack[gem] - 1 }),
            setPickCoin({ ...pickCoin, [gem]: pickCoin[gem] + 1 }),
            setPickCoinCounter(pickCoinCounter + 1)
        ])
    }


    const onPickGold = async () => {
        // If no gold on stack - return
        if (!coinStack.gold) return

        // If player already picked a gem - return
        if (pickCoinCounter && !pickCoin.gold) return

        // If player already picked gold - return it to coin stack
        if (pickCoinCounter && pickCoin.gold) {
            await Promise.all([
                setCoinStack({ ...coinStack, gold: coinStack.gold + 1 }),
                setPickCoin({ ...pickCoin, gold: 0 }),
                setPickCoinCounter(pickCoinCounter - 1)
            ])
            return
        }

        // Can pick gold
        await Promise.all([
            setCoinStack({ ...coinStack, gold: coinStack.gold - 1 }),
            setPickCoin({ ...pickCoin, gold: 1 }),
            setPickCoinCounter(pickCoinCounter + 1)
        ])
    }


    return (
        <>
            <div onClick={() => onPickGem('emerald')}>Emerald: {coinStack.emerald}</div>
            <div onClick={() => onPickGem('sapphire')}>Sapphire: {coinStack.sapphire}</div>
            <div onClick={() => onPickGem('ruby')}>Ruby: {coinStack.ruby}</div>
            <div onClick={() => onPickGem('diamond')}>Diamond: {coinStack.diamond}</div>
            <div onClick={() => onPickGem('onyx')}>Onyx: {coinStack.onyx}</div>
            <div onClick={() => onPickGold()}>Gold: {coinStack.gold}</div>

            {pickCoinCounter && JSON.stringify(pickCoin)}
        </>
    )
}