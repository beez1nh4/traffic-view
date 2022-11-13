import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar"
import { basicYellow } from "../../constants/colors"

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

`
const StartButton = styled.button`
    width: 400px;
`
const StartPageContainer = styled.div`
    margin-top: 80px;
    background-color: ${basicYellow};
`