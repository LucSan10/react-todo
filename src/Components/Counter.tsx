import { useReducer, useState } from 'react'
import { reducer } from './CounterReducer.tsx'
import CounterButton from './CounterButton.tsx'
import CounterDisplay from './CounterDisplay.tsx'
import CounterInput from './CounterInput.tsx'

const initialState = {
    count: 0
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [howMuch, setHowMuch] = useState<number>(0);
    const action = {
        payload: howMuch
    }

    return (
        <>
            <CounterInput setHowMuch={setHowMuch} />
            <div className="card">
                <CounterButton handleClick={() => dispatch({ type: 'add', ...action })}>
                    Increment by {howMuch}
                </CounterButton>

                <CounterButton handleClick={() => dispatch({ type: 'sub', ...action })}>
                    Subtract by {howMuch}
                </CounterButton>

                <CounterButton handleClick={() => dispatch({ type: 'mult', ...action })}>
                    Multiply by {howMuch}
                </CounterButton>

                <CounterButton handleClick={() => dispatch({ type: 'div', ...action })}>
                    Divide by {howMuch}
                </CounterButton>

                <CounterButton handleClick={() => dispatch({ type: 'nothing', ...action })}>
                    This does nothing.
                </CounterButton>
            </div>
            <CounterDisplay count={state.count} />
        </>
    )
}