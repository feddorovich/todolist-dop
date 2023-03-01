import React from 'react';
import s from './SuperButton.module.css'

type PropsType={
    callBack:()=>void
    color?:string
    children:React.ReactNode
    size?:'Big'
    disabled?:boolean
}

export const SuperButton:React.FC<PropsType> = (props) => {

    const {callBack, color, children,disabled, ...otherProps} = props

    const onClickHandler = () => {
        callBack()
    }
    console.log(otherProps.size)

    // const finalClassName = `${s.button} ${s.default}`

    // const finalClassName = `${s.button}
    // ${color==='red' ? s.red : s.default}
    // ${disabled ? s.disabled : ''}
    // `

    const finalClassName = `${s.button} 
    ${color==='red' ? s.red :color==='secondary'? s.secondary :s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        <button onClick={onClickHandler} className={finalClassName}>{children}</button>
    )

}


// const finalClassName= s.button
//     + (disabled
//         ? ' ' + s.disabled
//         : color === 'red'
//             ? ' ' + s.red
//             : color === 'secondary'
//                 ? ' ' + s.secondary
//                 : ' ' + s.default)
//     + (className ? ' ' + className : '')
// };





// export const SuperButton:React.FC<PropsType> = ({callBack,color,children,...props}) => {
//     const onClickHandler=()=>{
//         callBack()
//     }
//     console.log(props.size)
//     return (
//         <button onClick={onClickHandler}>{children}</button>
//     );
// };