type ActionType = {
    type: "add" | "sub" | "mult" | "div" | "nothing"
    payload: number
}

export const reducer = (state: any, action: ActionType) => {
    switch (action.type) {
        case "add": return { count: state.count + action.payload };
        case "sub": return { count: state.count - action.payload };

        case "div": {
            if (action.payload == 0) {
                alert('No can do!')
                return { count: state.count }
            }
            return { count: state.count / action.payload }
        };

        case "mult": return { count: state.count * action.payload };
        case "nothing": return { count: state.count }
        default: throw new Error()
    }
}