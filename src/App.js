
import './App.css';

import TaskOne from "./components/task-one/task-one";
import TaskTwo from './components/task-two/task-two';
import TaskThree from './components/task-three/task-three';
import TaskFour from './components/task-four/task-four';

function App() {
  return (
    <div className="App">
      <TaskOne />
      <TaskTwo />
      <TaskThree />
      <TaskFour />
    </div>
  );
}

export default App;
