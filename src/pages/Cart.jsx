// import { Add, Remove } from "@material-ui/icons";
// import styled from "styled-components";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { mobile } from "../responsive";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 300;
//   text-align: center;
// `;

// const Top = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
// `;

// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}

// `;

// const Info = styled.div`
//   flex: 3;
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;

// const Image = styled.img`
//   width: 200px;
// `;

// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const ProductName = styled.span``;

// const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styled.span``;

// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Cart = () => {
//   return (
//     <Container>
//       <Navbar />
//       <Wrapper>
//         <Title>YOUR BAG</Title>
//         <Top>
//           <TopButton>CONTINUE SHOPPING</TopButton>
//           <TopTexts>
//             <TopText>Shopping Bag(2)</TopText>
//             <TopText>Your Wishlist (0)</TopText>
//           </TopTexts>
//           <TopButton type="filled">CHECKOUT NOW</TopButton>
//         </Top>
//         <Bottom>
//           <Info>
//             <Product>
//               <ProductDetail>
//                 <Image src="https://shop.sc-project.com/Images/Products/Zoom/Aprilia_RS660_my2022_S1-Basso_Dettaglio.jpg" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b> Titanium sc project 
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b> 123456789
//                   </ProductId>
//                   <ProductColor color="black" />
//                   <ProductSize>
//                     <b>Model:</b>Aprilia RS660
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>1</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$ 1500</ProductPrice>
//               </PriceDetail>
//             </Product>
//             <Hr />
//             <Product>
//               <ProductDetail>
//                 <Image src="https://shop.sc-project.com/Images/Products/Zoom/B25-T36T__bmw_s1000rr_2017_titan_Endschalldampfer_cr-t_crt_sc_project_auspuff_s1000rr_auspuff.jpg" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b> Titanium Muffler
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b> 123456791
//                   </ProductId>
//                   <ProductColor color="gray" />
//                   <ProductSize>
//                     <b>Model:</b> BMW S1000RR
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>1</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$ 800</ProductPrice>
//               </PriceDetail>
//             </Product>
//           </Info>
//           <Summary>
//             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//             <SummaryItem>
//               <SummaryItemText>Subtotal</SummaryItemText>
//               <SummaryItemPrice>$ 2300</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Estimated Shipping</SummaryItemText>
//               <SummaryItemPrice>$ 59.00</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount</SummaryItemText>
//               <SummaryItemPrice>$ -59.00</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem type="total">
//               <SummaryItemText>Total</SummaryItemText>
//               <SummaryItemPrice>$ 2300</SummaryItemPrice>
//             </SummaryItem>
//             <Button>CHECKOUT NOW</Button>
//           </Summary>
//         </Bottom>
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// };

// export default Cart;


import React, { useContext } from 'react';
import { CartContext } from '../components/CartContextProvider'; 

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button>{item.quantity}</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
          ))}
          <button onClick={clearCart}>Clear cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;