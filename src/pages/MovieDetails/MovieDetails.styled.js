import styled from "styled-components";

export const Title = styled.h2`
        font-size: 16px;
        font-weight: 700;
        color: black;
        font-family: 'Courier New', Courier, monospace;
`

export const Text = styled.p`
        font-weight: 400;
        font-size: 12px;
        color: black;
        font-family: 'Courier New', Courier, monospace;
`

export const Container = styled.div`
        display: flex;
        padding: 20px;
`

export const ImgWrapper = styled.div`
        width: 200px;
        height: 300px;
        background-color: whitesmoke;
        padding: 20px;
`

export const InfoWrapper = styled.div`
        width: 200px;
        height: 300px;
        background-color: orange;
        padding: 20px;
        overflow-y: scroll;
`

export const Img = styled.img`
display: block;
width: 100%;
`

export const AdditioanlInfo = styled.div`

padding: 10px;
height: 80px;
width: 100%;
border-bottom: 1px solid black;
border-top: 1px solid black;
`

export const List = styled.ul`
display: flex;
flex-direction: column;
`