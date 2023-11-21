const URL = "http://localhost:3000/todo"

export const getTodos = async () => {
    try {
        const response = await fetch(URL)
        const data = response.json()
        return data
    }catch{
        throw new Error("Hemos obtenido un error")
    }
}   
export const addNewTodo = (data) => {
}