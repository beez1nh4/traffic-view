import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { basicYellow } from "../../constants/colors";
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

`
const Spots = styled.div`
    display: flex;
    width: 330px;
    height: 177px;
    margin-right: -7px;
    flex-wrap: wrap;
    justify-content: space-between;
`