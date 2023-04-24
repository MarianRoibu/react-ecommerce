import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #148f77;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: ${({ showHidden, isHidden }) =>
    showHidden || !isHidden ? "block" : "none"};
`;

export const ListItemTitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const ListItemDescription = styled.p`
  margin-bottom: 1rem;
`;

export const ListItemPrice = styled.span`
  font-weight: bold;
`;

export const ToggleButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ isHidden }) => (isHidden ? "#fcff82" : "#1abc9c")};
  color: ${({ isHidden }) => (isHidden ? "#000" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isHidden }) =>
      isHidden ? "#facf5a" : "#148f77"};
  }
`;


export const RedButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #c91e1e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #670202;
  }
`;