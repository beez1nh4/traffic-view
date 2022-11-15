import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { basicBlue, basicWhite, basicYellow } from "../../constants/colors";
import printNumbers from "../../functions/printNumbers";
import Spot from "../../components/Spot";
import { useAuth } from "../../providers/auth";


export default function SimulatorPage() {
    const n = 3
    let grid = printNumbers(n)
    const {setMatrix} = useAuth()
    
    return (
        <>
        <NavBar/>
        <SimulatorPageContainer>
            <Spots>
            <Spot spotNumber={"S"}></Spot>
            <Arrow>→</Arrow>
            <Grid>
            {grid.map((number) => <Spot key={number} spotNumber={number}></Spot>)}
            </Grid>
            <Arrow>→</Arrow>
            <Spot spotNumber={"F"}></Spot>
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
    width: 880px;
    height: 600px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: ${basicWhite};
    padding-left: 30px;
    padding-top: 80px;
    border-radius: 30px;
    border: 8px solid ${basicBlue};
`
const Grid = styled.div`
   /*  padding-top: 120px;
    padding-bottom: 150px;
    padding-right: 140px;
    padding-left: 220px; */ 
    width: 430px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Arrow = styled.div`
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    font-size: 40px;
    width: 60px;
    display: flex;
    padding-bottom: 90px;
`