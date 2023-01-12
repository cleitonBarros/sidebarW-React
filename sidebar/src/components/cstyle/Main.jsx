import styled from "styled-components"

const Main = styled.main `
  background-color: rgb(179, 173, 173);
  color: #fff;
  width:79%;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transition: width 750ms ease-in-out;

    &.active{
    width:100%;
    transition: width 100ms ease-in-out;
}
`;

export default Main