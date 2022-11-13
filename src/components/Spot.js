import styled from "styled-components"
import { basicBlue, basicDarkGray, basicGreen } from "../constants/colors"
import { useAuth } from "../providers/auth"
import defineCapacity from "../functions/defineCapacity"
import reverseVector from "../functions/reverseVector"

export default function Spot({spotNumber}) {
    const {auxVector, setAuxVector, matrix, setMatrix} = useAuth()

    function fillAux(){
        console.log(spotNumber)
        const newAuxVector = [...auxVector, spotNumber]
        setAuxVector(newAuxVector)
        let capacity = 0
        if (newAuxVector.length === 2){
            capacity = defineCapacity(newAuxVector[0], newAuxVector[1])
            let newMatrix = matrix
            reverseVector(newAuxVector)
            newMatrix[newAuxVector[0]-1][newAuxVector[1]-1] = capacity
            console.log(newMatrix)
            setMatrix(newMatrix)
            setAuxVector([])
        }

    }
    


    return(
        <>
            <ButtonSpot onClick={fillAux} spotNumber={spotNumber}>{spotNumber}</ButtonSpot>
        </>
    )
}

const ButtonSpot = styled.button`
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    color: ${basicDarkGray};
    font-weight: 900;
    margin-right: 100px;
    margin-bottom: 120px;
    width: 40px;
    height: 40px;
    background: ${basicGreen};
    border: 2px solid ${basicDarkGray};
    border-radius: 20px;
    &:hover {
    border: 2px solid ${basicBlue};
    cursor: pointer;
    }
`