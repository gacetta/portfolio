import tw, { styled } from 'twin.macro';
import Button from './Button';
import { animateScroll as scroll } from 'react-scroll';

const StyledFooter = tw.div`
  z-50
  flex
  h-16
  w-full
  items-center
  justify-center
  bg-white
  p-3
`;

const StyledControlPanel = tw.div`
   absolute
   right-0
   mr-6
`;

const scrollToTop = () => {
  scroll.scrollToTop({ duration: 1000 });
};

const Footer = () => {
  return (
    <StyledFooter>
      <p tw="text-4xl text-center">Footer</p>
      <StyledControlPanel>
        <a onClick={scrollToTop}>
          <Button $isSmall={true} $variant="secondary">
            To Top
          </Button>
        </a>
      </StyledControlPanel>
    </StyledFooter>
  );
};

export default Footer;
