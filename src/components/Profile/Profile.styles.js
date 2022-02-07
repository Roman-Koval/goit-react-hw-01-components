import styled from "@emotion/styled";

export const Profiled = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin: 20px auto 50px;
`;

export const Avatar = styled.img`
  border-radius: 100px;
  border: 2px solid green;
  width: 50%;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const Description = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 20px;
`;

// export const DescriptionItems = styled.div`
//   margin: 0px;
//   line-height: 1.4;
// `;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  padding: 0;
  justify-content: center;
`;
export const StatsItem = styled.li`
  margin: 0;
  display: flex;
  style-type: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 70px;
  border-radius: 4px;
  border: 1px solid #696969;
  background-color: #e6e6fa;
`;

export const StatsItemName = styled.span`
  font-weight: 700;
`;
