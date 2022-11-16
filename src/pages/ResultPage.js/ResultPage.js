import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { basicBlue, basicDarkGray, basicWhite, basicYellow } from "../../constants/colors";

export default function ResultPage() {
    return(
        <>
        <NavBar/>
        <ResultPageContainer>
            <Results>
                <Text>Results</Text>
                <Text>matrix</Text>
            </Results>
        </ResultPageContainer>
        </>
    )
}

const Results = styled.div`
    margin-top: 100px;
    margin-bottom: 200px;
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
    flex-direction: column;
    ;
`

const ResultPageContainer = styled.div`
    background-color: ${basicYellow};
    width: 100%;
    display: flex;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
`
const Text = styled.div`
    font-family: 'Barlow', sans-serif;
    font-size: 30px;
    color: ${basicDarkGray};
    font-weight: 600;

`