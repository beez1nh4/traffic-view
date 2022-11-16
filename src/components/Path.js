import styled from "styled-components"
import { basicDarkGray } from "../constants/colors"

export default function Path({item}) {
    console.log(item)
    return(
        <>
            <PathItem>{item}</PathItem>
        </>
    )
}

const PathItem = styled.div`
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    color: ${basicDarkGray};
    margin-bottom: 10px;
`