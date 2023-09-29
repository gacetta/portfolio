import tw from 'twin.macro';
import Image from 'next/image';
import heroImage from '../../public/assets/images/headshot-lemur.jpg';

const StyledHero = tw.section`
  flex
  max-h-screen
  min-h-screen
  w-screen
  justify-end
  bg-white
`;

const heroImageStyle = {
  'max-height': '100%',
  'max-width': '100%',
  'min-width': '75%',
  width: 'auto',
  height: 'auto',
  opacity: 0.5,
  'object-fit': 'cover',
  'object-position': '50% 5%',
  'z-index': -1,
};

const Hero = () => {
  return (
    <StyledHero>
      <Image src={heroImage} alt="Hero image" style={heroImageStyle} />
    </StyledHero>
  );
};

export default Hero;
