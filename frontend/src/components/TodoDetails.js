import { useTodoContext } from '../hooks/useTodoContext';

// Date Time
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodoContext();
  const handleClick = async () => {
    const response = await fetch('/api/v01/todo/' + todo._id, {
      method: 'DELETE',
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE_TODO', payload: json });
    }
  };
  return (
    <div className="todo-details">
      <h4>{todo.task}</h4>
      <p>
        <strong>
          Priority : <strong>{todo.priority}</strong>
        </strong>
      </p>
      <p>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>Done</span>
    </div>
  );
};

export default TodoDetails;
