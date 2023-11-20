import styles from './App.module.css';
import TodoForm from './components/form/todoForm';
import Container from './components/container/container';
import { useEffect, useState } from 'react';
import { getTodos } from './utils/api';

// function App() {
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoForm />
//       {/* Other components here */}
//     </div>
//   );
// }


function App() {
  const [todos, setTodos] = useState([])


  useEffect(() => {
    getTodos().then((res) => setTodos(res))
  },[])

  // useEffect(() => {
  //   fetch("http://localhost:3000/todo")
  //       .then(res => res.json())
  //       .then(data => {
  //         setTodos(data)
  //       }
  //       )
  //       .catch(err => console.log(err))
  //     });

  return (
  <div className={styles.container}>
      <TodoForm />
      <Container todos={todos}/>

        {/* MOVED TO COMPONENT
          <div className={styles.fieldwithlabel}>
          <label for="text">Add a task</label>
          <input type="text" placeholder="E.g. Pick up dry cleaning"/>
        </div>

        <div className={styles.fieldwithlabel}>
          <label for="date">Choose due date</label>
          <input id="date" type="date" min="1910-01-01" max="2024-12-31"/>
        </div>

        <div className={styles.fieldwithlabel}>
          <label for="category">Choose category</label>
          <select name="category" id="category">
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
            <option value="family">Family</option>
        </select>
        </div>

        <div className={styles.button}>
          <button>Add to list</button>
        </div> */}

    </div>
    );
};

export default App;
