import { useReducer } from "react";
import { reducer, initialState, AppContext } from "../store/store";
import '../assets/styles/App.css';
import AppHeader from "./appHeader.js";
import TasksContainer from "./tasksContainer.js";
import checkDeadlines from "../services/notifications.js";
import TasksList from "./tasksList/tasksList.js";

const func = checkDeadlines();
setInterval(func, 10000);

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <AppHeader/>
        <main className="main">
          <TasksContainer/>
        </main>
        <TasksList/>
      </AppContext.Provider>
    </>
  )
}

export default App;