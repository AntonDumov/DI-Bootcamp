import { TaskProvider } from './TaskContext';
import AddTask from './Components/AddTask';
import DisplayTasks from './Components/DisplayTasks';

function App() {
  return (
    <TaskProvider>
      <AddTask/>
      <DisplayTasks/>
    </TaskProvider>
  );
}

export default App;
