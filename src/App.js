import './App.css'
import TaskList from './components/TaskList'



const App = () => {
  const tasks = [
    {
      task: 'Manger',
      time: 1,
      assign: 'Nicolas'
    },
    {
      task: 'Dormir',
      time: 10,
      assign: 'Nicolas'
    },
    {
      task: 'Se doucher',
      time: 0.20,
      assign: 'Florian'
    }
  ]

  return (
    <div className="App">
      <TaskList task={tasks}/>
    </div>
  );
}

export default App;
