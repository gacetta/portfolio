import Image from 'next/image';
import heroImage from '../../public/assets/images/headshot-lemur.jpg';

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

const HeroImage = () => {
  return (
    <>
      <Image src={heroImage} alt="Hero image" style={heroImageStyle} />
    </>
  );
};

export default HeroImage;
