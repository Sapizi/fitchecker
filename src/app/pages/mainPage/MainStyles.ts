import Link from "next/link";
import styled from "styled-components";
export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
export const Title = styled.h1`
    font-size: 46px;
`
export const MainBlock = styled.div`
    width: 460px;
    height: 626px;
    border: 2px solid black;
    border-radius: 10px;
`
export const BigText = styled.span`
    font-size: 300px;
    margin-left: 36px;
`
export const CardText = styled.p`
    margin-top: 110px;
    font-size: 36px;
    margin-left: 36px;
`
export const CardButton = styled(Link)`
    display: block; 
    text-align: center;
    margin-left: 33px;
    width: 384px; 
    height: 121px;
    background-color: #e97c00;
    align-content: center;
    border-radius: 10px;
    color: white;
    font-size: 36px;
    text-decoration: none;
    margin-top: 26px;
`
export const DateTimeBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DateTimeText = styled.p`
    font-size: 24px;
    color: black;
    margin: 5px 0;
`;

export const ButtonsBlock= styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const LinkButton = styled(Link)`
    display: block; 
    text-align: center;
    margin-left: 33px;
    width: 384px; 
    height: 165px;
    background-color: #e97c00;
    align-content: center;
    border-radius: 10px;
    color: white;
    font-size: 36px;
    text-decoration: none;
    margin-top: 26px;
`