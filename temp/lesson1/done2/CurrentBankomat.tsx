import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <div>

            <Banknote color={props.money.banknotes === 'Dollars' ? 'aquamarine' : '#61dafb'}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>

            {/*            {props.money.banknotes === 'Dollars'
                ? <BanknotesGreen>
                    {props.money.banknotes}
                    {props.money.value}
                    {props.money.number}
                </BanknotesGreen>
                : <BanknotesBlue>
                    {props.money.banknotes}
                    {props.money.value}
                    {props.money.number}
                </BanknotesBlue>
            }*/}
        </div>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'aquamarine') {
      return 'aquamarine'
    } else {
      return '#61dafb'
    }
  }};
  margin: 10px;
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BanknotesGreen = styled.div`
  background-color: chartreuse;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknotesBlue = styled.div`
  background-color: #61dafb;
  width: 400px;
  height: 200px;
  margin: 10px;
`