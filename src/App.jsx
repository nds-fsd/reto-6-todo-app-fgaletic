import styles from './App.module.css';


function App() {
  return (
    <div className={styles.container}>

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
        </div>

    </div>
  );
};

export default App
