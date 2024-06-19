import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { deleteTask, toggleTask } from "../../../redux/slices/tasksSlice";
import { MdDeleteForever } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import "./CompleteTask.css";

function CompleteTask() {
  const [showSpinner, setShowSpinner] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const completeTasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter((task) => task.completed)
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const handleToggleComplete = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="complete-container">
      <div className="div-container">
        <div className="col-span-12">
          <h1 className="complete-title">Completed Tasks</h1>
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
        <div className="col-span-12 mt-4">
          <h1 className="complete-h1">Your Tasks</h1>

          {completeTasks.length > 0 ? (
            completeTasks.map((task) => (
              <div key={task.id} className="task-container">
                <div className="input-container">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                  <label className="form-checkbox-label mr-3">
                    {task.activeTask}
                  </label>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="delete-btn btn-sm"
                >
                  <MdDeleteForever size={18} className="mr-1" />
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className="no-complete-tasks">No Completed Tasks!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompleteTask;
