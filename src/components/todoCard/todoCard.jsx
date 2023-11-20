import { useState, useEffect } from "react";
import styles from './todoCard.module.css';

const TodoCard = (props) => {
    const [responseError, setResponseError] = useState('');
    const [success, setSuccess] = useState(false);
    const [todo, setTodo] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');
    const [done, setDone] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setTodo(props.todo);
        setFecha(props.fecha);
        setId(props.id);
        setDone(props.done);
    }, [props.todo, props.fecha, props.id, props.done]);

    const handleDelete = () => {
        fetch(`http://localhost:3000/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);
            if (response.status !== 200) {
                setResponseError(true);
            }
            return response.json();
        }).then((data) => {
            console.log(data);
            setSuccess(true);
            setMessage('Task deleted');
        }).catch((error) => {
            console.log(error);
            setResponseError(true);
        });
    };

    const handleComplete = () => {
        fetch(`http://localhost:3000/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !done
            })
        }).then((response) => {
            console.log(response);
            if (response.status !== 200) {
                setResponseError(true);
            }
            return response.json();
        }).then((data) => {
            console.log(data);
            setSuccess(true);
            setMessage('Task updated');
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

    return (
        <div className={styles.card}>
            {success && <p>{message}</p>}
            <div className={styles.cardcontent}>
                <h3>{todo}</h3>
                <p>{fecha}</p>
            </div>
            <div className={styles.cardoptions}>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleComplete}>{done ? 'Mark as pending' : 'Mark as done'}</button>
            </div>
        </div>
    );
}

export default TodoCard;
