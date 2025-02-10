import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Counter from './CounterC';
import CounterF from './CounterF';
import Pokemon from './Pokemon';
import ListManager from './ListManager';
import Evaluation from './Evaluation';
import ToDo from './ToDo';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ahmed');
  const [lastName, setLastName] = useState('Benhmida');

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <Header name={name} lastName={lastName} />
      <button onClick={handleClick}>{count}</button>
      <Counter initialCount={10} />
      <CounterF initialCount={10} step={2} />
      <ListManager 
        initialItems={["React", "Angular", "VueJs"]} 
        placeholder="Ajouter un nouvel élément..."
      />
      <Evaluation initialNotes={[15, 20, 8]} />
      <ToDo 
        initialTask={[
          { task: 'Terminer projet', priority: 'Haute', isCompleted: false },
          { task: 'Terminer tâche', priority: 'Moyenne', isCompleted: false }
        ]} 
      />
      <Pokemon />
      <Footer />
    </>
  )
}

export default App
