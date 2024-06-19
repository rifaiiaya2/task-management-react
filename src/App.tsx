import { Provider } from "react-redux";
import store from "./redux/store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/moleculs/navbar/Navbar";
import Dashboard from "./components/atoms/Dashboard/Dashboard";
import ActiveTask from "./components/organisms/activeTask/ActiveTask";
import CompleteTask from "./components/organisms/completeTask/CompleteTask";
import Almashhad from "./components/organisms/almashhad/Almashhad";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="flex-grow pt-2">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/active" element={<ActiveTask />} />
              <Route path="/complete" element={<CompleteTask />} />
              <Route path="/mashhad" element={<Almashhad />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
