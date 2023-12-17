import { useTodoContext } from '../hooks/useTodoContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Date Time
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodoContext();
  const { user } = useAuthContext();
  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch('/api/v01/todo/' + todo._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
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
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default TodoDetails;
