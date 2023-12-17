import { useEffect } from 'react';
import { useTodoContext } from '../hooks/useTodoContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Components
import TodoDetails from '../components/TodoDetails';
import TodoForm from '../components/TodoForm';

const Home = () => {
  const { todo, dispatch } = useTodoContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch('/api/v01/todo', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_TODO', payload: json });
      }
    };
    if (user) {
      fetchTodo();
    }
  }, [dispatch, user]);
  console.log(user);

  return (
    <div className="Home">
      <div className="greeting">
        <span>Hi! Welcome Back :) {user.email}</span>
      </div>
      <TodoForm />
      <div className="todo">
        {todo && todo.map((todo) => <TodoDetails key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Home;
