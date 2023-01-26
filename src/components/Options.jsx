import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { setOption } from "../features/options/optionSlice";
import { setVideo } from "../features/video/videSlice";

const Options = () => {
    const dispatch = useDispatch();
    const { option } = useSelector((state) => state.option)
    const handleClick = (e) => {
        dispatch(setOption(e.currentTarget.dataset.value))
        dispatch(setVideo(e.currentTarget.dataset.value))
    }
    if (option !== '') {
        return <ButtonContainer>
            <Button>
                {option === 'B' ? "Sign up for free webinar" : `Download "Campaign Structure Guide"`}
            </Button>
        </ButtonContainer>
    }
    return (
        <OptionsContainer>
            <button onClick={handleClick} data-value="A">
                <span className="letter">A</span>
                <span>Campaign structure</span>
            </button>
            <button onClick={handleClick} data-value="B">
                <span className="letter">B</span>
                <span>Learn Facebook basics</span>
            </button>
            <button onClick={handleClick} data-value="C">
                <span className="letter">C</span>
                <span>3rd choice</span>
            </button>
        </OptionsContainer>
    )
}
const Button = styled.button`
    cursor: pointer;
    background-color:rgb(125, 0, 254) ;
    outline:none ;
    border:none ;
    border-radius:30px ;
    max-width:332px ;
    color:white;
    font-size:large ;
    padding:1rem ;
`
const ButtonContainer = styled.div`
        min-height:100vh ;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        flex-direction:column ;
`
const OptionsContainer = styled.div`
    min-height:100vh ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
    gap:1rem;
    button{
        display:flex ;
        justify-content:flex-start;
        align-items:center ;
        background-color:rgba(17, 17, 17, 0.1);
        padding:1.7rem ;
        width:50% ;
        height:2.67rem ;
        outline:none ;
        border:none ;
        border-radius: 3rem;
        cursor: pointer;
        :hover{
            border:1px solid rgb(125, 0, 254) ;
        }
        .letter{
            background-color:rgb(125, 0, 254) ;
            padding:8px ;
            display:flex ;
            font-weight:500 ;
            align-items:center ;
            justify-content:center ;
            width:1rem;
            height:1rem ;
            margin-right:10px ;
            color:white;
            font-size:small ;
            border-radius:100px ;
        }
    }
`
export default Options