import styled from "@emotion/styled";

export const Statistic = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin: 20px auto 50px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  padding: 0;
  justify-content: center;
`;

export const StatsItem = styled.li`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 2px;
  border: 1px solid #696969;
  background-color: #e6e6fa;
`;

export const StatsLabel = styled.span`
  font-weight: 400;
`;

export const StatsParcentage = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
