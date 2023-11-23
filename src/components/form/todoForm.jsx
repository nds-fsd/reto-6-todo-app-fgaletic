import styles from './todoForm.module.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";

function TodoForm({visible, setVisible}) {
    const [responseError, setResponseError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm();

    const handleHide = () => {
        setVisible(!visible)
    };

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response);
            if (response.status !== 200) {
                setResponseError(true);
            }
            return response.json();
        }).then((data) => {
            console.log(data);
            setSuccess(true);
        }).catch((error) => {
            console.log(error);
            setResponseError(true);
        });
    };

    if (responseError) return (
        <div className={styles.container}>
            <h3>Something went wrong!</h3>
        </div>
    );
    

    if (success) return (
        <div className={styles.container}>
            <h3>Task created!</h3>
        </div>
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldwithlabel}>
                <label htmlFor="text">Add a task</label>
                <input
                    type="text"
                    placeholder="E.g. Pick up dry cleaning"
                    {...register("title", { required: true })}
                />
            </div>

            <div className={styles.fieldwithlabel}>
                <label htmlFor="date">Choose due date</label>
                <input
                    id="date"
                    type="date"
                    min="1910-01-01"
                    max="2024-12-31"
                    pattern="\d{4}-\d{2}-\d{2}" /*why is this not working??*/
                    {...register("fecha", { required: true})}
                />
            </div>

            <div className={styles.fieldwithlabel}>
                <label htmlFor="category">Choose category</label>
                <select name="category" id="category" {...register("category", { required: true })}>
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="shopping">Shopping</option>
                    <option value="health">Health</option>
                    <option value="family">Family</option>
                </select>
            </div>


            <button className={styles.submit} type="submit">Add to list</button>

            <button type={'button'} onClick={handleHide} className={styles.submit}>{`${visible == true?'Hide todos':'Show todos'}`}</button>


        </form>
    );
};

export default TodoForm;