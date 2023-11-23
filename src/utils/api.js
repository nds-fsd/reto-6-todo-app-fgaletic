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

// export const addNewTodo = (data) => {
//     try {
//         const response = fetch(URL, {
//     }
// }