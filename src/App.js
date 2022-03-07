import './App.css'
import Card from './components/card'
import TaskList from './components/TaskList'



const App = () => {
  const taTasks = ['Nettoyer', 'Balayer', 'Astiquer']

  return (
    <>
      <Card name='Pierre' age='21'/>

      <TaskList tasks={taTasks}/>
    </>
  )
}

export default App;
