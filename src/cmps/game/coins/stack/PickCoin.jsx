export const PickCoin = ({ pickCoin, updatePick }) => {
    const pickCoins = Object.keys(pickCoin).filter(coin => pickCoin[coin] > 0)

    return (
        <>
            {pickCoins.map(coin => (
                <div key={coin}>{coin}: {pickCoin[coin]}
                    <span onClick={() => updatePick(coin, false)}>-1</span>
                </div>
            ))}
        </>
    )
}