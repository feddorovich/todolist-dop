import React from 'react';
import styles from './Site.module.css'
import {Navigate, Routes, Route, NavLink} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {dataState} from "./data/dataState";
import {Page} from "./pages/Page";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/'} className={({isActive})=>isActive ? styles.active : styles.navLink}>HOME PAGE</NavLink></div>
                    <div><NavLink to={'/page/0'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 0</NavLink></div>
                    <div><NavLink to={'/page/1'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 1</NavLink></div>
                    <div><NavLink to={'/page/2'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 2</NavLink></div>
                    <div><NavLink to={'/page/3'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 3</NavLink></div>
                    <div><NavLink to={'/*'} className={({isActive})=>isActive ? styles.active : styles.navLink}>404</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<div>HOME PAGE</div>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};


//---------------------------------------------------------------------------------------

/*import React from 'react';
import styles from './Site.module.css'
import {Navigate, Routes, Route, NavLink} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'page1'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 1</NavLink></div>
                    <div><NavLink to={'page2'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 2</NavLink></div>
                    <div><NavLink to={'page3'} className={({isActive})=>isActive ? styles.active : styles.navLink}>PAGE 3</NavLink></div>
                    <a href={'/page3'}>A HREF PAGE3</a>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

                        <Route path={'/page1'} element={<PageOne/>}/>
                        <Route path={'/page2'} element={<PageTwo/>}/>
                        <Route path={'/page3'} element={<PageThree/>}/>

                        <Route path={'/!*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};*/


