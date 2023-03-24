import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h2 style={{ color: 'tomato' }}>Get Data From Json TODOS</h2>
            <h3>Total Todos Data: {todos.length}</h3>
            <div>
                {
                    todos.map(todo => <Todo title={todo.title} id={todo.id}></Todo>)
                }
            </div>
        </div>
    );
};


const Todo = (props) => {
    return (
        <div>
            <h4>Title_{props.id}: {props.title}</h4>
            {/* <p>Status: {props.completed}</p> */}
        </div>
    )
}

export default Todos;