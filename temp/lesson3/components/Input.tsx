import React, {ChangeEvent} from 'react';

type PropsType = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
}

export const Input: React.FC<PropsType> = (props) => {

/*    let [title, setTitle] = useState('')*/

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input value={props.newTitle} onChange={onChangeHandler}/>
        </div>
    );
};