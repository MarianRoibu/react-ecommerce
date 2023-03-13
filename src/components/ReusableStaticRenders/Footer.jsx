import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../../responsive";
  
  const Container = styled.div`
  display: flex;
  background: #393e46;
  ${mobile({ flexDirection: "column" })}
  position: relative;
  
`;

  
  const Left = styled.div`
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: white;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: white;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>LOGO.</Logo>
          <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad fugit deleniti, 
              esse porro soluta voluptatem? Voluptatibus, 
              rem illo quos odio harum facilis, ut, incidunt perferendis totam similique amet. Dignissimos.
          </Desc>
          <SocialContainer>
            <SocialIcon color="#222831">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="#222831">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="#222831">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="#222831">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Carbon Fiber</ListItem>
            <ListItem>Titanium Sistems</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Fake, Sessami 3245, North Pole
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +34 643 123 456
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@assembler.dev
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;