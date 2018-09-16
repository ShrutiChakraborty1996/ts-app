import {ActionTypes} from "../types/TodoActionType";
import TodoType from "../types/TodoType";

export interface AddTodoAction {
    type: ActionTypes.ADD_TODO,
    payload: { todo: TodoType }
}

export function addTodo(title: string): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {title}
        }
    }
}


export type Action = AddTodoAction;