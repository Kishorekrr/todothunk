export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodosRequest());
    try {
      // Simulating an API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve([{ id: 1, text: 'Learn Redux Thunk' }]), 1000)
      );
      dispatch(fetchTodosSuccess(response));
    } catch (error) {
      dispatch(fetchTodosFailure('Failed to fetch todos'));
    }
  };
};
