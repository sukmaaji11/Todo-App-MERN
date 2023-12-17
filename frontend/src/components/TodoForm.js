import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import { useAuthContext } from "../hooks/useAuthContext";

const TodoForm = () => {
  //
  const { user } = useAuthContext();
  const { dispatch } = useTodoContext();
  //
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("Please log in");
      return;
    }
    const todo = { task, priority };
    const response = await fetch("/api/v01/todo", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTask("");
      setPriority("");
      setError(null);
      setEmptyFields([]);
      console.log("New Task Added", json);
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };
  return (
    <div className="form-container">
      <form action="" className="create" onSubmit={handleSubmit}>
        <h3>Add New Task</h3>
        <label>Task :</label>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className={emptyFields.includes("task") ? "error" : ""}
        />
        <label>Priority :</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={emptyFields.includes("priority") ? "error" : ""}
        >
          <option value=""></option>
          <option value="Critical">Critical</option>
          <option value="Neutral">Neutral</option>
          <option value="Low">Low</option>
        </select>
        <button>Add Task</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default TodoForm;
