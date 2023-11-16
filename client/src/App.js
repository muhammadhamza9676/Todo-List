import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';


function App() {
  return (
    <div className='appdiv'>
      <div>
      <Header/>
      <TodoForm/>
      <Todos/>
      </div>
    </div>
    
  );
}

export default App;
