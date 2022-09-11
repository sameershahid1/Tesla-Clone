import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { useSelector } from 'react-redux';



const Home = () => {
const Data=useSelector((state)=>state.TeslaData.Data);
return (
    <Container>
    {Data.map((data)=>(
      <Section
        key={data.id}
        title={data.title}
        description={data.description}
        backGroundImg={data.image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        isRight={true}
      />      
    ))}
    <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      backGroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      isRight={true}
    />
    <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roof"
      backGroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      isRight={true}
    />
      <Section
      title="Accessories"
      description=""
      backGroundImg="accessories.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      isRight={false}
    />    
    </Container>
  )
}

export default Home

const Container=styled.div`
height:100vh;
`;




