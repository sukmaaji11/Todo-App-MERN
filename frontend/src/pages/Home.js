import { useEffect } from 'react';
import { useTodoContext } from '../hooks/useTodoContext';

// Components
import TodoDetails from '../components/TodoDetails';
import TodoForm from '../components/TodoForm';

const Home = () => {
  const { todo, dispatch } = useTodoContext();
  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch('/api/v01/todo');
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_TODO', payload: json });
      }
    };
    fetchTodo();
  }, [dispatch]);
  return (
    <div className="Home">
      <TodoForm />
      <div className="todo">
        {todo && todo.map((todo) => <TodoDetails key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Home;
