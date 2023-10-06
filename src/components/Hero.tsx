import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';
import heroImage from '../../public/assets/images/headshot-lemur.jpg';

const StyledHeroContainer = tw.section`
  flex
  h-screen
  max-h-screen
  min-h-screen
  justify-end
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

const StyledHeaderContainer = tw.div`
  z-40
  flex
  h-screen
  w-max
  min-w-max
  flex-col
  border-2
  p-1
  text-6xl
  font-bold
  text-secondary
  opacity-100
`;

const Hero = () => {
  return (
    <StyledHeroContainer>
      {/* <h1 tw="absolute left-0 top-1/2 text-6xl m-10">Hero</h1> */}
      {/* <StyledHeaderContainer>
        <div tw="h-2/3"></div>
        <h1 tw="sticky top-0 left-0 h-max bg-black p-2">michael gacetta</h1>
      </StyledHeaderContainer> */}
      <Image src={heroImage} alt="Hero image" style={heroImageStyle} />
    </StyledHeroContainer>
  );
};

export default Hero;
