import { useState, useEffect } from "react";
import styles from './todoCard.module.css';

const TodoCard = (props) => {
    const {title, done : hecho, category, fecha: date} = props
    const [responseError, setResponseError] = useState('');
    const [success, setSuccess] = useState(false);
    const [id, setId] = useState('');
    const [done, setDone] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setId(props.id);
        setDone(props.done);
    }, [props.id, props.done]);

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
            <div className={styles.cardContent}>
                <p className={styles.p}>{category}</p>
                <h3 className={styles.h3}>{title}</h3>
                <p className={styles.p}>{date}</p>
                
            </div>
            <div className={styles.cardOptions}>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleComplete} className={styles.submit}>{hecho ? 'Mark as pending' : 'Mark as done'}</button>
            </div>
        </div>
    );
}

export default TodoCard;
