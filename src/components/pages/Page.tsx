import React from 'react';
import {PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {

    let params = useParams()

    if (!props.pages[Number(params.id)]?.heading) {
        return <Navigate to={'/*'}/>
    }

    return (
        <div>
            <div>{params.id}</div>
            <div>{props.pages[Number(params.id)].heading}</div>
        </div>
    );
};