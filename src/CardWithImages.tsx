import React from 'react';
import styled from 'styled-components';

interface CardWithImagesProps {
  imageFull?: string;
  imageUrlTop?: string;
  imageUrlBottom?: string;
  header: string;
  description: string;
  secondDescription?: string;
}

const CardContainer = styled.div`
  display: flex;
  width: 437.5px;
  height: 336px;
  border-radius: 8px;
  gap: 40px;
  background-color: #f0f0f0;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageTop = styled.img`
  width: 183px;
  height: 173px;
  border-radius: 8px 0 0 0;
`;
const FullImage = styled.img`
width: 183.5px
height: 336px
border-radius: 8px, 0px, 0px, 8px
`;

const ImageBottom = styled.img`
width: 184px
height: 160px
top: 176px
left: 0.13px
padding: 0px, 0.5px, 0px, 0px
border-radius: 8px, 0px, 0px, 8px

`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.div`
  width: 190px;
  height: 32px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
`;

const Description = styled.div`
font-family: Nunito Sans;
font-size: 14px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
`;
const SecondDescription = styled.div`
width: 190px
height: 96px
font-family: Nunito Sans;
font-size: 15px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
`;


const CardWithImages: React.FC<CardWithImagesProps> = ({ imageFull, imageUrlTop, imageUrlBottom, header, description, secondDescription }) => {
  return (
    <CardContainer>
      <ImageColumn>
        <ImageTop src={imageUrlTop} alt="Top Image" />
        <ImageBottom src={imageUrlBottom} alt="Bottom Image" />
        <FullImage src={imageFull} alt="Full Image" />
      </ImageColumn>
      <TextColumn>
        <Header>{header}</Header>
        <Description>{description}</Description>
        <SecondDescription>{secondDescription}</SecondDescription>
      </TextColumn>
    </CardContainer>
  );
};

export default CardWithImages;
