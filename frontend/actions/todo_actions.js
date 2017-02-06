

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR = "CLEAR";


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const clearList = () => ({
  type: CLEAR
});

// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
// window.clearList = clearList;
