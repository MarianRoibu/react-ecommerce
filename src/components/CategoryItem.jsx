import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 10rem;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: linear-gradient(45deg, white 50%, gray 50%);
  background-size: 200% 200%;
  background-position: top left;
  transition: background-position 0.5s;
  cursor: pointer;
  
  &:hover {
    background-position: bottom right;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      
      <Image src={item.img} />
      
      <Info>
        <Title>{item.title}</Title>
        <Button>
        <StyledNavLink to={item.link}>SHOP NOW</StyledNavLink>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
