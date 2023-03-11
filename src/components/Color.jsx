import styled from 'styled-components';

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;

const Color = ({ color, onClick }) => {
  return (
    <ColorCircle color={color} onClick={onClick} />
  );
};

export default Color;