import styled from "styled-components";



export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh; 
`;

export const Form = styled.form`
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

export const TextArea = styled.textarea`
margin-bottom: 10px;
border: none;
border-radius: 5px;
padding: 0.5rem;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const Select = styled.select`
margin-bottom: 10px;
border: none;
border-radius: 5px;
padding: 0.5rem;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
margin-bottom: 10px;
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

export const ButtonEdit = styled.button`
margin-bottom: 10px;
padding: 0.5rem 1rem;
background-color: #fcff82;
color: #000;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #facf5a;
}
`;

export const Filters = styled.div`
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

export const FiltersTitle = styled.h3`
margin-bottom: 1rem;
font-weight: bold;
`;

export const FilterContainer = styled.div`
margin-bottom: 1rem;
`;

export const FilterLabel = styled.label`
margin-right: 0.5rem;
`;

export const CheckboxInput = styled.input`
margin-right: 0.5rem;
`;

export const ListContainer = styled.div`
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

export const ListTitle = styled.h2 `margin-bottom: 1rem; font-weight: bold;;`

export const ListItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
background-color: #fff;
border-radius: 5px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
width: 100%;
margin-bottom: 1rem;

&:last-child {
margin-bottom: 0;
}
`;

export const ItemTitle = styled.h3 `
margin-bottom: 0.5rem;;`

export const ItemDescription = styled.p `
margin-bottom: 0.5rem;;`

export const ItemDetails = styled.div `
display: flex; 
flex-direction: row; 
justify-content: space-between; 
width: 100%;;`

export const ItemCategory = styled.span `
margin-right: 0.5rem; 
font-weight: bold;;`

export const ItemDate = styled.span `
font-size: 0.8rem; 
color: #888;;`

export const ErrorText = styled.p `
color: #ff0000; 
font-weight: bold; 
margin-top: 0.5rem;;`

export const LoadingText = styled.p `
font-weight: bold; 
margin-top: 0.5rem;;`


export const ListFilters = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`;

export const ItemCheckbox = styled.input`
margin-right: 5px;
`;

export const ItemDeleteButton = styled.button`
    margin-right: 0.5rem;
  padding: 0.5rem;
  background-color: #f83e4b;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #be3144;
  }

`;


export const ButtonContainer = styled.div`
display: flex;
margin-top: 1rem;

button {
  margin-right: 0.5rem;
  padding: 0.5rem;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #148f77;
  }
}
`;