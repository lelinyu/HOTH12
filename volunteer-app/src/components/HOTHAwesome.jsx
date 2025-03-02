export const HOTHAwesome = ({count}) => {
    let happyPhrase = `I really enjoy HOTH.`;

    for (let i = 0; i < count; i++) {
        happyPhrase += "❤️";
    }
    return <p>{happyPhrase}</p>
}