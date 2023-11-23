const URL = "http://localhost:3000/todo"

export const getTodos = async () => {
    try {
        const response = await fetch(URL)
        const data = response.json()
        return data
    }catch (error) {
        console.error('Error getting todos:', error);
        throw error;
    }
};

export const createTodo = async (data) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};

export const updateTodo = async (id, data) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};
