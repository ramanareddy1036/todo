let nextAddTodo = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextAddTodo ++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })

  export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })

  export const deleteTodo = () => ({
    type: 'DELETE_TODO'
  })
  
  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }