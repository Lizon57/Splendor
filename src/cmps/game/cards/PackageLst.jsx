import { PackageItem } from "./PackageItem"

export const PackageLst = ({ stack, shown, currPlayerCoin }) => {
    const levels = ['firstLevel', 'secondLevel', 'thirdLevel']
    levels.reverse()

    return levels.map(level => <PackageItem
        key={Math.random()}
        stack={stack[level + 'Cards']}
        shown={shown[level + 'Cards']}
        currPlayerCoin={currPlayerCoin}
    />)
}