import { Gem } from "./Gem"


export const PlayerCoin = ({ gemFluid, gemFixed, gold }) => {
    const gemSort = ['emerald', 'sapphire', 'ruby', 'diamond', 'onyx']

    return (
        <div>
            {gemSort.map(gem => <Gem
                key={gem}
                gem={gem}
                gemFluid={gemFluid[gem]}
                gemFixed={gemFixed[gem]}
            />)}
            gold: {gold}
        </div>
    )
}