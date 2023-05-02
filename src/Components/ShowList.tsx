import { useState } from "react"

const ShowList = () => {
    const [lista, setLista] = useState<JSX.Element[]>([]);
    let people: string[] = ['Isaac', 'Breno', "Santiago", 'Bia']
    setLista([...lista, ...(people.map(p => <li>{p}</li>))])
    return <ul>{lista}</ul>
}

export default ShowList