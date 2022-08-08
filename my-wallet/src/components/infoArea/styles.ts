import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 30px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

export const MonthArrow = styled.div`
    width: 90px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;

    @media (max-width: 680px) {
      font-size: 12px;
      width: 70px;
    }

    @media (max-width: 540px) {
      font-size: 12px;
      width: 50px;
    }

    @media (max-width: 500px) {
      font-size: 10px;
      width: 40px;
    }

    @media (max-width: 350px) {
      font-size: 10px;
      width: 35px;
    }

    @media (max-width: 280px) {
      font-size: 8px;
      width: 25px;
    }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
flex: 2;
display: flex;
`;