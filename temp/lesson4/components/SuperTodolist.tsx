import React from 'react';

type PropsType={
    tasks:InPropsType[]
    children?:React.ReactNode
}

type InPropsType={
    id: number,
    title: string,
    isDone: boolean
}


export const SuperTodolist:React.FC<PropsType>= (props) => {
    const{tasks, ...otherProps}=props
    return (
        <div>
            <ul>
            {tasks.map(el=>{
                return(
                    <li key={el.id}>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <input type="checkbox" checked={el.isDone}/>
                    </li>
                )
            })}
            </ul>
            <div style={{backgroundColor:'yellow'}}>
                {otherProps.children}
            </div>

            <div>----------------------------------------------------------------------------------</div>
        </div>
    );
};

