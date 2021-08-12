export interface Todo {
  props: {
    title: string;
    userName: string;
    completed: boolean;
  }
}

export interface User {
  props: {
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