import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  scroll-snap-align: center;
  animation: slide-in-right 1s ease-out;

  &:hover .image {
    transform: scale(1.1);
  }

  &:hover .info {
    opacity: 1;
    transform: translateY(0);
  }
  
  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;



const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 1;
`;

const Image = styled.img`
  height: 65%;
  z-index: 2;
  transition: all 0.5s ease;
  transform-origin: center center;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  transform: translateY(20%);
  text-align: center;
  cursor: pointer;

  h2 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .icons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
    }
  }

  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #3897f0;
    color: white;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      background-color: #38b8f0;
      transform: scale(1.1);
    }
  }
`;


const Product = ({ item }) => {
  // Retrieve data from local storage
  const storedProducts = JSON.parse(localStorage.getItem("products"));
  
  // Add the retrieved data to the current item
  const updatedItem = { ...item, ...storedProducts[item.id] };
  
  return (
    <Link to={`/products/${item.id}`}>
      <Container>
        <Circle />
        <Image className="image" src={updatedItem.img} />
        <Info className="info">
          <h2>{updatedItem.name}</h2>
          <div className="icons">
            <div className="icon">
              <SearchOutlined />
            </div>
            <div className="icon">
              <FavoriteBorderOutlined />
            </div>
            <div className="icon">
              <ShoppingCartOutlined />
            </div>
          </div>
          <button className="button">Show More</button>
        </Info>
      </Container>
    </Link>
  );
};

export default Product;