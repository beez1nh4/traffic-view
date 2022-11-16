import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar"
import { basicDarkGreen, basicGreen, basicYellow } from "../../constants/colors"

export default function StartPage() {
    const navigate = useNavigate()
    function navigateSimulator(){
        navigate("/simulator")
      }
    return (
        <>
        <NavBar/>
        <StartPageContainer>
        <WelcomeText>Welcome to Traffic View!</WelcomeText>
        <StartButton onClick={navigateSimulator}>Start my route</StartButton>
        </StartPageContainer>
        </>
    )

}

const WelcomeText = styled.div`
    font-size: 50px;
    font-family: 'Barlow', sans-serif;
    margin-bottom: 100px;
    margin-top: 250px;
`
const StartButton = styled.button`
    width: 400px;
    height: 50px;
    font-weight: bold;
    font-family: 'Exo 2', sans-serif;
    margin: 4px solid ${basicDarkGreen};
    background-color: ${basicGreen};
    font-size: 20px;
    margin-bottom: 500px;
`
const StartPageContainer = styled.div`
    margin-top: 80px;
    background-color: ${basicYellow};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`