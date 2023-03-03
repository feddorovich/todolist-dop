import React from 'react';
import {PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";

type PropsType = {
    pages: PagesType[]
}

export const Component = (props: PropsType) => {

    const params = useParams()
    console.log(props.pages[Number(params.id)]?.heading)


    if (!props.pages[Number(params.id)]) {
        return  <Navigate to={'/not-found'}/>
    }

    return (
        <div>
            <div>{props.pages[Number(params.id)]?.heading}</div>
            <div>{props.pages[Number(params.id)]?.about}</div>
        </div>
    );
};