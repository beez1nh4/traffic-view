import styled from "styled-components"
import { basicBlue, basicWhite, basicDarkGray } from "../constants/colors"
import { useAuth } from "../providers/auth"
import Path from "./Path"

export default function PathScreen() {
    const {paths} = useAuth()
    
    return(
        <>
        <Paths>
            {paths.map((item, i) => <Path key={i} item={item}></Path>)}
        </Paths>
        </>
    )
}

const Paths = styled.div`
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    color: ${basicDarkGray};
    width: 400px;
    height: 600px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: ${basicWhite};
    border-radius: 30px;
    border: 8px solid ${basicBlue};
    padding: 20px;
`