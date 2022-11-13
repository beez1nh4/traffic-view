import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { basicBlue, basicWhite, basicYellow } from "../../constants/colors";
import printNumbers from "../../functions/printNumbers";
import Spot from "../../components/Spot";
import { useAuth } from "../../providers/auth";
import formatMatrix from "../../functions/formatMatrix";
import { useEffect } from "react";

export default function SimulatorPage() {
    const n = 3
    let grid = printNumbers(n)
    const {setMatrix} = useAuth()
    
    return (
        <>
        <NavBar/>
        <SimulatorPageContainer>
            <Spots>
            {grid.map((number) => <Spot key={number} spotNumber={number}></Spot>)}
            </Spots>
        </SimulatorPageContainer>
        </>
    )
}

const SimulatorPageContainer = styled.div`
    background-color: ${basicYellow};
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Spots = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    box-sizing: border-box;
    display: flex;
    width: 800px;
    height: 600px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${basicWhite};
    padding-top: 120px;
    padding-bottom: 150px;
    padding-right: 140px;
    padding-left: 220px;
    border-radius: 30px;
    border: 8px solid ${basicBlue};
`