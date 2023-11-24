import styles from './App.module.css';
import TodoForm from './components/form/todoForm';
import Container from './components/container/container';
import { useEffect, useState } from 'react';
import { getTodos } from './utils/api';

function App() {
  const [todos, setTodos] = useState([])
  const [visible, setVisible] = useState(true)


  useEffect(() => {
    getTodos().then((res) => setTodos(res))
  },[]);

  return (
  <div className={styles.container}>
      <TodoForm visible={visible} setVisible={setVisible}/>
      {visible && <Container todos={todos}/>}

    </div>
    );
};

export default App;
