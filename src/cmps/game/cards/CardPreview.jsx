export const CardPreview = ({ card, onPickCard }) => {
    return (
        <div onClick={() => onPickCard(card)}>{JSON.stringify(card)}</div>
    )
}