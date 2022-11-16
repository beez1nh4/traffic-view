import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { basicBlue, basicDarkGreen, basicGreen, basicWhite, basicYellow } from "../../constants/colors";
import printNumbers from "../../functions/printNumbers";
import Spot from "../../components/Spot";
import PathScreen from "../../components/PathScreen";
import axios from "axios";
import { useAuth } from "../../providers/auth";
import { useNavigate } from "react-router-dom";

export default function SimulatorPage() {
    const navigate = useNavigate()
    const {matrix} = useAuth()
    const n = 3
    let grid = printNumbers(n)
    

    function sendInfo(){
        const initialCapacity = Number(prompt('What is the initial capacity?'))
        const URL = "http://localhost:5000/paths"
        const body = {
            initialCapacity,
            matrix
        }
        console.log(body)
        const promise = axios.post(URL, body)
        
        promise.then((res) => {
            navigate("/result")
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          
        }) 
    }

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
            <Align>
            <PathScreen></PathScreen>
            <ButtonSend onClick={sendInfo}>View Results</ButtonSend>
            </Align>
        </SimulatorPageContainer>
        
        </>
    )
}

const SimulatorPageContainer = styled.div`
    background-color: ${basicYellow};
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
const Spots = styled.div`
    margin-top: 50px;
    margin-bottom: 300px;
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
const ButtonSend = styled.button`
    width: 400px;
    height: 40px;
    margin-top: 50px;
    font-weight: bold;
    font-family: 'Exo 2', sans-serif;
    margin: 4px solid ${basicDarkGreen};
    background-color: ${basicGreen};
    font-size: 20px;
`
const Align = styled.div`
    margin-top: 50px;
    margin-bottom: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
