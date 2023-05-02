import { useReducer } from 'react'

interface Props {
    howMuch: number
    handleClick: () => void
    children?: React.ReactNode
}

const CounterButton = (props: Props) => {

    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    )
}

CounterButton.defaultProps = {
    howMuch: 0
}

export default CounterButton