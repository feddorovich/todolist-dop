import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodolist} from "./components/SuperTodolist";

function App() {

    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]


    return (
        <div>
            <SuperButton callBack={() => {}} color={'red'}>Red Super Button</SuperButton>
            <SuperButton callBack={() => {
            }} color={'secondary'}>Without color Super Button</SuperButton>
            <SuperButton callBack={() => {
            }} disabled>Without color Super Button</SuperButton>


            <SuperTodolist tasks={tasks}>
                <SuperButton callBack={() => {
                }} color={'red'}>Red Super Button</SuperButton>
                <SuperButton callBack={() => {
                }} color={'secondary'}>Without color Super Button</SuperButton>
                <SuperButton callBack={() => {
                }} disabled>Without color Super Button</SuperButton>
            </SuperTodolist>


            <SuperTodolist tasks={tasks}>
                <SuperButton callBack={() => {
                }} color={'secondary'}>Without color Super Button</SuperButton>
                <SuperButton callBack={() => {
                }} disabled>Without color Super Button</SuperButton>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
            </SuperTodolist>


            <SuperTodolist tasks={tasks}>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
            </SuperTodolist>

        </div>
    );
}


export default App;
