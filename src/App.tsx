import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { TodosUsersProvider } from './hooks/useTodosUsers';
import Routes from './routes';

export function App() {
  return (
    <BrowserRouter>
      <TodosUsersProvider>
        <Header />
        <Routes />
      </TodosUsersProvider>
    </BrowserRouter>
  );
}

