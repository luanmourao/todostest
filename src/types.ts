export interface Todo {
  props: {
    id: string;
    title: string;
    userName: string;
    completed: boolean;
  }
}

export interface User {
  props: {
    id: string;
    name: string;
    email: string;
    website: string;
    phone: string;
    address: {
      street: string;
      city: string;
    }
  }
}