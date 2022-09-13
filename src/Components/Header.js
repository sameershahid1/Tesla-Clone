import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import {Fade} from 'react-reveal';



const Header = () => {
  return (
    <Fade>
    <Container>
       <h1>
         <a><img src='/images/logo.svg' alt='Logo' /></a>
       </h1>
       <Menu>
       <LeftMenu>
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Solar Roof</a></li>
          <li><a href="#">Solar Panels</a></li>
       </LeftMenu>
       <RightMenu>
          <li><a href="">Shop</a></li>
          <li><a href="">Account</a></li>
          {/* <li><a href="">Menu</a></li> */}
          <CustomMenu/>
       </RightMenu>
     </Menu>  
    </Container>
</Fade>    
  )
} 

export default Header


const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
min-height: 60px;
left:0;
top:0;
right:0;
margin:0 3rem;
`;


const Menu=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:72%;
@media screen and (max-width:1181px)
{
justify-content: flex-end;
}
`;


const LeftMenu=styled.ul`
display: flex;
align-items:center;
justify-content: center;
gap:10px;

& a
{
  font-weight:600;
  text-decoration: none;
  font-size:14px;
  text-transform:uppercase;
}
&>li
{
  padding:4px 8px;
  list-style-type: none;
}
@media screen and (max-width:1181px)
{
   display:none;  
}

`;

const RightMenu=styled(LeftMenu)`
flex:0;
display:flex;
`;

const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`;










