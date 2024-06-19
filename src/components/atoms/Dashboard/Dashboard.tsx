import { useEffect } from "react";
import dashimg from "../../../assets/dashboard.jpg";
import "./Dashboard.css";

function Dashboard() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="dash-container">
      <div className="container mx-auto pt-2">
        <div className="dash-windows">
          <div className="lg:w-1/2">
            <h1 className="dash-h1">Task Management Website</h1>
            <p className="dash-p">
              Discover efficiency with our Task Management Dashboard. Seamlessly
              organize, create, and track your tasks in one intuitive interface.
              Elevate your productivity effortlessly!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={dashimg} alt="img" className="dash-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
