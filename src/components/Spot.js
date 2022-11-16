import styled from "styled-components"
import { basicBlue, basicDarkGray, basicGreen, basicWhite } from "../constants/colors"
import { useAuth } from "../providers/auth"
import { useState, useEffect} from "react"
import defineCapacity from "../functions/defineCapacity"
import reverseVector from "../functions/reverseVector"
import verifyHorizontal from "../functions/verifyHorizontal"
import verifyVertical from "../functions/verifyVertical"


export default function Spot({spotNumber}) {
    const {auxVector, setAuxVector, matrix, setMatrix, paths, setPaths} = useAuth()
    const [horizontalArrow, setHorizontalArrow] = useState("→")
    const [verticalArrow, setVerticalArrow] = useState("↓")
    const [showColorHorizontal, setShowColorHorizontal] = useState(true)
    const [showColorVertical, setShowColorVertical] = useState(true)
    useEffect(() => {
        if (spotNumber === 3 || spotNumber === 6 || spotNumber === 9 || spotNumber === "S" || spotNumber === "F"){
            setHorizontalArrow("")
        }
        
        if (spotNumber === 7 || spotNumber === 8 || spotNumber === 9 || spotNumber === "S" || spotNumber === "F"){
            setVerticalArrow("")
        }
        ;
    }, [spotNumber]);
    
    function fillAux(){
        if (auxVector.includes(spotNumber) || spotNumber === "S" || spotNumber === "F"){
            alert("You can't choose this spot")
        } else{
        console.log(spotNumber)
        const newAuxVector = [...auxVector, spotNumber]
        setAuxVector(newAuxVector)
        let capacity = 0
        if (newAuxVector.length === 2){
            capacity = defineCapacity(newAuxVector[0], newAuxVector[1])
            const newMessage = `You set a path from ${newAuxVector[0]} to ${newAuxVector[1]} with the capacity of ${capacity}`
            setPaths([...paths, newMessage])
            let newMatrix = matrix
            
            console.log("hor", verifyHorizontal(newAuxVector[0], newAuxVector[1]))

            if (verifyHorizontal(newAuxVector[0], newAuxVector[1])){
                setShowColorHorizontal(true)
                if(newAuxVector[0] > newAuxVector[1]){
                    setHorizontalArrow("←")
                } 
            } 
            
            if (verifyHorizontal(newAuxVector[0], newAuxVector[1])){
                if(newAuxVector[0] < newAuxVector[1]){
                    setHorizontalArrow("→")
                } 
            }  

            if (verifyVertical(newAuxVector[0], newAuxVector[1])){
                setShowColorVertical(true)
                if(newAuxVector[0] > newAuxVector[1]){
                    setVerticalArrow("↑")
                } else {
                    setVerticalArrow("↓")
                }
            } 

            reverseVector(newAuxVector)
            newMatrix[newAuxVector[0]-1][newAuxVector[1]-1] = capacity
            console.log(newMatrix)
            setMatrix(newMatrix)
            setAuxVector([])
            
        }
        }
    }
    


    return(
        <>  
            <BiggerContainer>
            <SpotContainer>
            <ButtonSpot onClick={fillAux} spotNumber={spotNumber}>{spotNumber}</ButtonSpot>
            <Arrow condition={showColorHorizontal}>{horizontalArrow}</Arrow>
            </SpotContainer>
            <Arrow condition={showColorVertical}>{verticalArrow}</Arrow>
            </BiggerContainer>
        </>
    )
}

const ButtonSpot = styled.button`
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    color: ${basicDarkGray};
    font-weight: 900;
   /*  margin-right: 100px;
    margin-bottom: 120px; */
    margin-right: 20px;
    margin-bottom: 20px; 
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
const Arrow = styled.div`
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    font-size: 40px;
    width: 50px;
    display: flex;
    padding-left: 10px;
    color: ${props => props.condition ? basicBlue : basicWhite};
`
const SpotContainer = styled.div`
    display: flex;

`
const BiggerContainer = styled.div`
    width: 120px;
    height: 120px;

`