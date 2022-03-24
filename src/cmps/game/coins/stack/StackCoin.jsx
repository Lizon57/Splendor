import { useState } from 'react'

export const StackCoin = ({ gemStack, goldStack }) => {
    let { emerald, sapphire, ruby, diamond, onyx } = gemStack
    const [coinStack, setCoinStack] = useState({ emerald, sapphire, ruby, diamond, onyx, gold: goldStack })
    const [pickCoin, setPickCoin] = useState({ emerald: 0, sapphire: 0, ruby: 0, diamond: 0, onyx: 0, gold: 0 })
    const [isPick, setIsPick] = useState(false)

    const onPickGem = (gem) => {
        console.log(gem)
    }


    const onPickGold = async () => {
        // If player already picked a gem - return
        if (isPick && !pickCoin.gold) return

        // If no gold on stack - return
        if (!coinStack.gold) return

        // If player already picked gold - return it to coin stack
        if (isPick && pickCoin.gold) {
            console.log('hi')
            await Promise.all([
                setCoinStack({ ...coinStack, gold: coinStack.gold + 1 }),
                setPickCoin({ ...pickCoin, gold: 0 }),
                setIsPick(false)
            ])
            return
        }

        await Promise.all([
            setCoinStack({ ...coinStack, gold: coinStack.gold - 1 }),
            setPickCoin({ ...pickCoin, gold: 1 }),
            setIsPick(true)]
        )
    }


    return (
        <>
            <div onClick={() => onPickGem('emerald')}>Emerald: {coinStack.emerald}</div>
            <div onClick={() => onPickGem('sapphire')}>Sapphire: {coinStack.sapphire}</div>
            <div onClick={() => onPickGem('ruby')}>Ruby: {coinStack.ruby}</div>
            <div onClick={() => onPickGem('diamond')}>Diamond: {coinStack.diamond}</div>
            <div onClick={() => onPickGem('onyx')}>Onyx: {coinStack.onyx}</div>
            <div onClick={() => onPickGold()}>Gold: {coinStack.gold}</div>

            {isPick && JSON.stringify(pickCoin)}
        </>
    )
}