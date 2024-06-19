import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import {
  addTask,
  deleteTask,
  toggleTask,
} from "../../../redux/slices/tasksSlice";
import { MdDeleteForever } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import "./ActiveTask.css";

function ActiveTask() {
  const [newTask, setNewTask] = useState("");
  const [showSpinner, setShowSpinner] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const activeTasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter((task) => !task.completed)
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTask({
        id: uuidv4(),
        activeTask: newTask,
        completed: false,
      })
    );
    setNewTask("");
  };
  const handleToggleActive = (id: string) => {
    dispatch(toggleTask(id));
  };
  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="active-container">
      <div className="row mt-5">
        <div className="title">
          <h1 className="active-h1">Active Task</h1>
          {loading || showSpinner ? (
            <ClipLoader
              color="#ff0000"
              loading={true}
              size={130}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : null}
        </div>
        <form className="row mt-4 justify-center" onSubmit={handleSubmit}>
          <label className="form-label text-2xl text-blue-500">
            Enter Your Task
          </label>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type Your Tasks Here..."
              className="active-input"
              value={newTask}
              onChange={(t) => setNewTask(t.target.value)}
            />
          </div>
          <div className="col-12 mt-4">
            <button
              className=" text-light bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
              disabled={!newTask.trim()}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="container mt-4">
        <h1 className="text-2xl font-light text-yellow-500">Your Tasks</h1>
        {activeTasks.length > 0 ? (
          activeTasks.map((task) => (
            <div key={task.id} className="task-container">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="form-check-input text-2xl"
                  checked={task.completed}
                  onChange={() => handleToggleActive(task.id)}
                />
                <label className="form-check-label">{task.activeTask}</label>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="btn-sm delete-btn"
              >
                <MdDeleteForever size={19} className="mr-1" />
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="no-active-tasks">No Active Tasks</div>
        )}
      </div>
    </div>
  );
}
export default ActiveTask;
