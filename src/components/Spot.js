import styled from "styled-components"
import { basicDarkGray, basicDarkGreen, basicGreen } from "../constants/colors"

export default function Spot({spotNumber}) {
    return(
        <>
            <ButtonSpot>{spotNumber}</ButtonSpot>
        </>
    )
}

const ButtonSpot = styled.button`
    margin-right: 7px;
    margin-bottom: 18px;
    width: 26px;
    height: 26px;
    background: ${basicGreen};
    border: 1px solid ${basicDarkGreen};
    border-radius: 12px;
    &:hover {
    border: 1.75px solid ${basicDarkGray};
    cursor: pointer;
    }
`