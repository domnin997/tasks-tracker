import '../assets/styles/App.css';
import AppHeader from '../components/appHeader/appHeader.js';
import TasksWorkspace from "./tasksWorkspace/tasksWorkspace.js";
import checkDeadlines from "../services/notifications.js";

const func = checkDeadlines();
setInterval(func, 10000);

function App() {
  return (
  <>
    <AppHeader/>
    <main className="main">
      <TasksWorkspace/>
    </main>
  </>
  )
}

export default App;