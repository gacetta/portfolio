import tw, { styled, css } from 'twin.macro';
import { HeroImage } from './index';

const StyledHeroContainer = tw.section`
  flex
  h-screen
  max-h-screen
  min-h-screen
  justify-end
`;

const Hero = () => {
  return (
    <StyledHeroContainer>
      <HeroImage />
    </StyledHeroContainer>
  );
};

export default Hero;
