import styled from "styled-components"

const Base = styled.div `
    height: 10px;
    width: 250px;
    background: black;
    margin-left: 100px;

`
const Vertical = styled.div `
    height: 250px;
    width: 10px;
    background: black;
    margin-left: 150px;


`
const HorizontalLine = styled.div `
    height: 10px;
    width: 120px;
    background: black;
    position: absolute;
    right: 80px;
    top: 0;    

`

const VerticalLineSmall = styled.div `
    height: 40px;
    width: 10px;
    background: black;
    margin-left: 150px;
    position: absolute;
    right: 70px;
    top: 0;    

`

const Head = styled.div `
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 8px solid black;
    
    position: absolute;
    top: 35px;
    right: 52px;

`

const Body = styled.div `
    height: 100px;
    width: 10px;
    background: black;
   
    border: 5px solid black;
    
    position: absolute;
    top: 75px;
    right: 55px;

`
const RightArm = styled.div `
    height: 10px;
    width: 50px;
    
    background: black;
    position: absolute;
    top: 90px;
    right: 30px;

`

const LeftArm = styled.div `
    height: 80px;
    width: 10px;
    
    
    position: absolute;
    top: 75px;
    right: 55px;

`




export default function HangmanDrawing() {
    return (
            <div style={{ 
                position: 'relative', 
                
            }}
                >
                
                <LeftArm />
                <RightArm />
                <Body />
                <Head />
                <VerticalLineSmall />
                <HorizontalLine />
                <Vertical />
                <Base />
            </div>
        )
}