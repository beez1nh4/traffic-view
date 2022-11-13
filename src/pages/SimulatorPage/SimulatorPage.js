import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { basicBlue, basicDarkGray, basicWhite, basicYellow } from "../../constants/colors";
import printNumbers from "../../components/PrintNumbers";
import Spot from "../../components/Spot";

export default function SimulatorPage() {
    let grid = printNumbers(3)
    
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