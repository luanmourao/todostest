import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Todo, User } from "../types";

interface TodosUsersContextData {
  todos: Todo[];
  users: User[];
}

interface TodosUsersProviderProps {
  children: ReactNode;
}

const TodosUsersContext = createContext<TodosUsersContextData>({} as TodosUsersContextData);

export function TodosUsersProvider({ children }: TodosUsersProviderProps): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsersData() {
      const usersData = await api.get('/users').then(response => response);

      const formattedUsersData = Object.values(usersData).map(element => {
        let newUserElement: User = {
          props: {
            id: element.id,
            name: element.name,
            email: element.email,
            website: element.website,
            phone: element.phone,
            address: {
              street: element.address.street,
              city: element.address.city
            }
          }
        }

        return newUserElement;
      });

      setUsers(formattedUsersData);
    }

    async function getTodosData() {
      const todosData = await api.get('/todos').then(response => response);

      const formattedTodosData = Object.values(todosData).map(async element => {
        const user: any = await api.get(`/users/${element.userId}`).then(response => response);

        let newTodoElement: Todo = {
          props: {
            id: element.id,
            title: element.title,
            userName: user[1],
            completed: element.completed
          }
        }

        return newTodoElement;
      });

      const resolvedFormattedTodosData = await Promise.all(formattedTodosData);

      setTodos(resolvedFormattedTodosData);
    }

    getUsersData();
    getTodosData();
  }, []);

  return (
    <TodosUsersContext.Provider
      value={{ todos, users }}
    >
      {children}
    </TodosUsersContext.Provider>
  )
}

export function useTodosUsers(): TodosUsersContextData {
  const context = useContext(TodosUsersContext)

  return context;
}