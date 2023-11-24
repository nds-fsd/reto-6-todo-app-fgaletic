import { useState, useEffect } from "react";
import styles from './todoCard.module.css';
import { deleteTodo, updateTodo } from '../../utils/api.js';

const TodoCard = (props) => {
    const { title, category, fecha: date } = props;
    const [responseError, setResponseError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [id, setId] = useState('');
    const [isDone, setIsDone] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setId(props.id);
        setIsDone(props.done);
    }, [props.id, props.done]);

    const handleDelete = () => {
        deleteTodo(id)
            .then((response) => {
                if (response.status !== 200) {
                    setResponseError(true);
                    setMessage('Failed to delete task');
                    return;
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setSuccess(true);
                setMessage('Task deleted');
                props.onDelete(id);
            })
            .catch((error) => {
                console.log(error);
                setResponseError(true);
                setMessage('Failed to delete task');
            });
    };
    
    const handleComplete = () => {
        updateTodo(id, !isDone)
            .then((response) => {
                console.log(response);
                if (response.status !== 200) {
                    setResponseError(true);
                    setMessage('Failed to update task');
                    return;
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setSuccess(true);
                setMessage('Task updated');
                setIsDone(!isDone);
            })
            .catch((error) => {
                console.log(error);
                setResponseError(true);
                setMessage('Failed to update task');
            });
    };

    if (responseError) return (
        <div className={styles.container}>
            <h3>Something went wrong!</h3>
        </div>
    );

    return (
        <div className={styles.card}>
            {success && <p>{message}</p>}
            <div className={styles.cardContent}>
                <p className={styles.p}>{category}</p>
                <p className={styles.p}>{title}</p>
                <p className={styles.p}>{date}</p>
                
            </div>
            <div className={styles.cardOptions}>
                <button onClick={handleDelete} className={styles.options}>Delete</button>
                <button onClick={handleComplete} className={styles.options}>{isDone ? 'Done' : 'Pending'}</button>
            </div>
        </div>
    );
}

export default TodoCard;