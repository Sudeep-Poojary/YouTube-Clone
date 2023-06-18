import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  margin-top: 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-style: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;

const Info = styled.div`
  font-style: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6ss5pgYETcDiLOO4M8bvfmviy8h-cUgV6YQ5nja7ng&usqp=CAU&ec=48665701g"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.googleusercontent.com/Ov2tJY8JdiBYxntxXOojPCjRHI6FjbjNozzsaQL4Z8GpyA5_LDqz1cD18zEA3bTYrkWZaKJyPg=s176-c-k-c0x00ffffff-no-rj"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>IGN</ChannelName>
            <Info>700,000 views ● 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
