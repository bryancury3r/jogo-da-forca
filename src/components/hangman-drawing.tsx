import styled from "styled-components"

const Base = styled.div `
    height: 10px;
    width: 250px;
    background: black;

`

const Vertical = styled.div `
    height: 250px;
    width: 10px;
    background: black;

`






export default function HangmanDrawing() {
    return (
            <div style={{ 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'
            }}
                >
                <div>1</div>
                <Vertical />
                <Base />
            </div>
        )
}