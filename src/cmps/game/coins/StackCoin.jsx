export const StackCoin = ({ gemStack, goldStack }) => {
    const { emerald, sapphire, ruby, diamond, onyx } = gemStack


    return (
        <>
            <div>Emerald: {emerald}</div>
            <div>Sapphire: {sapphire}</div>
            <div>Ruby: {ruby}</div>
            <div>Diamond: {diamond}</div>
            <div>Onyx: {onyx}</div>
            <div>Gold: {goldStack}</div>
        </>
    )
}