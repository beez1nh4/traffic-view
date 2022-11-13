import logo from "../assets/img/tv_logo.png"
import styled from "styled-components"
import { basicGreen, basicWhite } from "../constants/colors"

export default function NavBar() {
    return(
        <>  
            <NavBarContainer>
            <Logo src={logo} alt="pin"/>
            <TrafficViewText>TrafficView</TrafficViewText>
            </NavBarContainer>
        </>
    )
}

const NavBarContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    background-color: ${basicGreen};
    color: ${basicWhite};
    align-items: center;
    justify-content: center;
`

const TrafficViewText = styled.div`
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    font-size: 40px;
`
const Logo = styled.img`
    height: 40px;
    margin-right: 10px;
`