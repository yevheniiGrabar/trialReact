import React from 'react';
import styled from 'styled-components';
import CardWithImages from './CardWithImages';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <RowContainer>
        <CardWithImages
          imageUrlTop="/image1.png"
          imageUrlBottom="/image2.png"
          header="Photography"
          description={`• Drone Photography\n• Interiors\n• Exteriors / Architectural\n`}
          secondDescription={'Every photograph we produce finds the beauty in your property while serving as a profitable asset.'}
        />
        <CardWithImages
          imageFull="/image3.png"
          header="Virtual Staging"
          description="Our staging will help you sell the potential of your space.
          We can work off of our own photography or photos you provide."
        />
        <CardWithImages
          imageFull="/image4.png"
          header="Renderings"
          description={`• Interiors \n• Exteriors\n`}
          secondDescription='Renderings are the gold standard in pre-construction marketing.'
        />
      </RowContainer>
      <RowContainer>
        <CardWithImages
          imageFull="/image5.png"
          header="Interactive Tours"
          description={`• Matterport \n •Video Walkthroughs\n`}
          secondDescription='Give your audience the ability to explore your property without requiring in-person travel.'
        />
        <CardWithImages
          imageFull="/image6.png"
          header="Floor Plans"
          description={`• On-site Measure \n 2D Floor Plans\n • 3D Floor Plans`}
          secondDescription='We produce laser-precise floor plans faster than any other service.'
        />
        <CardWithImages
          imageFull="/image 8.png"
          header="Video"
          description={`• Drone Cinematography \n • Interiors\n • Exteriors / Architectural`}
          secondDescription='Video content has higher engagement and will help your property stand out online.'
        />
      </RowContainer>
    </PageContainer>
  );
};

export default HomePage;
