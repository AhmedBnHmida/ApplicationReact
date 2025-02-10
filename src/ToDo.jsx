import { useState } from 'react';

const ToDo = ({ initialTask }) => {
  const [tasks, setTasks] = useState(initialTask);
  const [taskInput, setTaskInput] = useState(""); 
  const [priorityInput, setPriorityInput] = useState("Basse"); 
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTerminate = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, {
        task: taskInput.trim(),
        priority: priorityInput,
        isCompleted: false
      }]);
      setTaskInput(""); 
      setPriorityInput("Basse"); 
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ul>
        {filteredTasks.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.isCompleted ? "#99ff99" : "" }}>
            {item.task} : {item.priority}
            <button onClick={() => handleTerminate(index)}>
              {item.isCompleted ? "Non Terminé" : "Terminer"}
            </button>
            <button onClick={() => handleDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h3>Total des tâches : {tasks.length}</h3>
      <h4>Total des tâches terminées : {tasks.filter(task => task.isCompleted).length}</h4>

      <input
        type='text'
        placeholder='Ajouter une tâche'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)} 
      />

      <select
        name='Priorité'
        value={priorityInput}
        onChange={(e) => setPriorityInput(e.target.value)} 
      >
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>

      <button onClick={handleAddTask}>Ajouter une tâche</button>

      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
    </>
  );
};

export default ToDo;
