import './App.css'
import TaskList from './components/TaskList'



const App = () => {
  const tasks = [
    {
      id: 1,
      label: '',
      assign: 'Nicolas'
    },
    {
      id: 2,
      label: "Dormir",
      assign: 'Nicolas'
    },
    {
      id: 3,
      label: 'Se doucher',
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
