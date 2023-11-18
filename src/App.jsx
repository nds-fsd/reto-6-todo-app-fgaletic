import styles from './App.module.css';


function App() {
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
        <label for="text">What needs to be done?</label>
        <input type="text" />
        <label for="date">Choose the due date</label>
        <input type="date"/>
        <label for="category">Choose a category</label>
        <select name="category" id="category">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="shopping">shopping</option>
          <option value="health">Health</option>
          <option value="family">Family</option>
        </select>
        {/* <input type="checkbox" /> */}
        <button>Add</button>
    </div>
  );
};

export default App
