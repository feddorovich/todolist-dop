import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type DataType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    let [data, setData] = useState<DataType[]>([])

    const doFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        doFetch()
    }, [])

    const showMeFn = () => {
        doFetch()
    }

    const clearMeFn = () => {
        setData([])
    }

    let [newTitle, setNewTitle] = useState('')
    console.log(newTitle)
    const addTitle = () => {
        const newTask = {userId: 1000, id: data.length+1, title: newTitle, completed: false}
        setData([newTask, ...data])
        setNewTitle('')
    }

    return (
        <div className="App">
            <Button name={'Show ME'} callback={showMeFn}/>
            <Button name={'Clear ME'} callback={clearMeFn}/>
            <div>
                <Input newTitle={newTitle} setNewTitle={setNewTitle}/>
                <Button name={'NEW TITLE'} callback={addTitle}/>
            </div>
            <ul>
                {data.map((t) => {
                    return (
                        <li key={t.id}>
                            <span>{t.id}</span>
                            {/*<span>{t.userId}</span>*/}
                            <span>{t.title}</span>
                            <input type="checkbox" checked={t.completed} onChange={() => {
                            }}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
