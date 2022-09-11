import React from 'react';
import styled from 'styled-components';


const Section = ({title,description,leftBtnText,rightBtnText,isRight,backGroundImg}) => {
  return (
    <Wrap bgIMG={'/images/'+backGroundImg}>

      {/*Header*/}
      <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
      </ItemText>
      <Buttons>
        {/*Button-container*/}
        <ButtonContainer>
            <LeftButton>{leftBtnText}</LeftButton>
            {isRight&&<RightButton>{rightBtnText}</RightButton>}
        </ButtonContainer>

        {/*DownWard Arrow*/}
        <DownwardArrow src="/images/down-arrow.svg" alt="Down Arrow" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
background-image: url(${({bgIMG})=>bgIMG});
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`;


//Style for ItemText
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`;


//Button Container
const ButtonContainer=styled.div`
display: flex;
justify-content: center;
align-items:center;
gap:0.8rem;
margin-bottom: 1.9rem;

@media screen and (max-width:768px)
{
  &
  {
    flex-direction: column;
  }
}
`;

//Left Button
const LeftButton=styled.button`
background-color: rgba(23,26,32,0.8);
text-transform:uppercase;
border-radius:25px;
border: none;
height:2.5rem;
width:16rem;
color: white;
opacity: 0.85;
font-size:12px;
cursor: pointer;
`;


//Right Button
const RightButton=styled(LeftButton)`
color:black;
background-color: white;
opacity: 0.65;
`;


//Downward Arrow
const DownwardArrow=styled.img`
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`;


//Buttons
const Buttons=styled.div`
display:flex;
flex-direction: column;
margin-bottom: 5px;
`;


