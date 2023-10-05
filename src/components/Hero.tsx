import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';
import heroImage from '../../public/assets/images/headshot-lemur.jpg';

const StyledHeroContainer = tw.section`
  flex
  max-h-screen
  min-h-screen
  justify-end
  bg-white
`;

const heroImageStyle = {
  'max-height': '100%',
  'max-width': '100%',
  'min-height': '100%',
  'min-width': '75%',
  width: 'auto',
  height: 'auto',
  opacity: 0.5,
  'object-fit': 'cover',
  'object-position': '50% 5%',
  'z-index': -1,
};

const StyledHeroHeader = tw.h1`
  absolute
  bottom-10
  left-10
  z-50
  w-max
  min-w-max
  bg-gray
  p-4
  text-6xl
  font-bold
  text-secondary
  opacity-100
`;

const Hero = () => {
  return (
    <StyledHeroContainer>
      <h1 tw="absolute left-0 top-1/2 text-6xl m-10">Hero</h1>
      <StyledHeroHeader>i am a software engineer</StyledHeroHeader>
      <Image src={heroImage} alt="Hero image" style={heroImageStyle} />
    </StyledHeroContainer>
  );
};

export default Hero;
