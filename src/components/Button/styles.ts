import styled from "styled-components";

export const Container = styled.div`
  button {
    border: none;
    background: green;
    color: white;
    border-radius: 0.2rem;
    width: 2.3rem;
    height: 100%;
    font-weight: bold;

    &:hover{
      transition: 0.2s;

      filter: brightness(0.9);
    }
  }
`