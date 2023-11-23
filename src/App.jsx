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
  const [visible, setVisible] = useState(true)


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
      <TodoForm visible={visible} setVisible={setVisible}/>
      {visible && <Container todos={todos}/>}

    </div>
    );
};

export default App;
