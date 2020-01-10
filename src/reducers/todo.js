const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        
        case 'TOGGLE_TODO':
        return state.map(
             todo => {
             if (todo.id === action.id) {
                 return { ...todo, completed: !todo.completed };
             } else {
                return todo;
             }
            })

        case 'DELETE_TODO':
        return state.filter(todo => !todo.completed)
                // if(todo.completed === false) {
                //     return todo;
                // } else {
                //     return ;
                // }

        default:
        return state
    }
}
export default todos;