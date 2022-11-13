import styled from "styled-components"
import { basicBlue, basicDarkGray, basicDarkGreen, basicGreen } from "../constants/colors"

export default function Spot({spotNumber}) {
    return(
        <>
            <ButtonSpot>{spotNumber}</ButtonSpot>
        </>
    )
}

const ButtonSpot = styled.button`
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    color: ${basicDarkGray};
    font-weight: 900;
    margin-right: 100px;
    margin-bottom: 120px;
    width: 40px;
    height: 40px;
    background: ${basicGreen};
    border: 2px solid ${basicDarkGray};
    border-radius: 20px;
    &:hover {
    border: 2px solid ${basicBlue};
    cursor: pointer;
    }
`