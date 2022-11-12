import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function StartPage() {
    const navigate = useNavigate()
    function navigateSimulator(){
        navigate("/simulator")
      }
    return (
        <>
        <WelcomeText>Welcome to Traffic View!</WelcomeText>
        <StartButton onClick={navigateSimulator}>Start my route</StartButton>
        </>
    )

}

const WelcomeText = styled.div`
    font-size: 50px;

`
const StartButton = styled.button`
    width: 400px;
`