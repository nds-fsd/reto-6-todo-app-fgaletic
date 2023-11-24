import styles from './todoForm.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getTodos } from '../../utils/api.js';
import { createTodo } from '../../utils/api.js';

function TodoForm({visible, setVisible}) {
    const [responseError, setResponseError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [todos, setTodos] = useState([]);

    const { handleSubmit, register, formState: { errors } } = useForm();

    const handleHide = () => {
        setVisible(!visible)
    };

    const onSubmit = (data) => {
        console.log(data);
        createTodo(data)
            .then((response) => {
                console.log(response);
                setSuccess(true);
                getTodos()
                .then((res) => setTodos(res))
            })
            .catch((error) => {
                console.log(error);
                setResponseError(true);
            });
    };

    if (responseError) {
        return (
            <div className={styles.container}>
                <h3>Something went wrong</h3>
            </div>
        );
    }

    if (success) {
        return (
            <div className={styles.container}>
                <h3>Todo created!</h3>
                <button type={'button'} onClick={() => setSuccess(false)} className={styles.submit}>Add more</button>
                <button type={'button'} onClick={handleHide} className={styles.submit}>{`${visible == true?'Hide todos':'Show todos'}`}</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldwithlabel}>
                <label htmlFor="text">Add a todo</label>
                <input
                    type="text"
                    placeholder="E.g. Pick up dry cleaning"
                    {...register("title", { required: true })}
                />
            </div>

            <div className={styles.fieldwithlabel}>
                <label htmlFor="date">Due date</label>
                <input
                    id="date"
                    type="date"
                    min="1910-01-01"
                    max="2024-12-31"
                    pattern="\d{4}-\d{2}-\d{2}"
                    {...register("fecha", { required: true})}
                />
            </div>

            <div className={styles.fieldwithlabel}>
                <label htmlFor="category">Choose category</label>
                <select name="category" id="category" {...register("category", { required: true })}>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Health">Health</option>
                    <option value="Family">Family</option>
                </select>
            </div>

            <button className={styles.addTodo} type="submit">
                Add to list
                </button>

            <button onClick={handleHide} className={styles.hideUnhide}>

                {`${visible == true?'Hide todos':'Show todos'}`}
                
                </button>
        </form>
    );
};

export default TodoForm;