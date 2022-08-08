import styled from "styled-components";
export const Container = styled.div`
`;

export const Header = styled.div`
    background-color: #181442;
    height: 200px;
    text-align: center;
  `;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
`;

export const Body = styled.div`
   margin: auto;
   max-width: 980px;
   margin-bottom: 50px;
`;

export const HeaderSubText = styled.h3`
    margin: 0;
    padding: 0;
    color: #fff;
    padding-top: 30px;
    @media (max-width: 500px) {
      font-size: 20px;
    }

    @media (max-width: 360px) {
      font-size: 10px;
    }
`;