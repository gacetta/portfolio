import tw, { styled } from 'twin.macro';
import Button from './Button';
import { Link, Events } from 'react-scroll';

const StyledNavbar = tw.div`
  fixed
  inset-0
  z-40
  flex
  h-full
  max-h-16
  w-screen
  items-center
  justify-end
  space-x-3
  p-4
  pl-7
  pr-7
`;

const StyledControlPanel = tw.div`
  flex
  space-x-3
`;

Events.scrollEvent.register('begin', () => {
  console.time('scrollTime');
});

Events.scrollEvent.register('end', () => {
  console.timeEnd('scrollTime');
});

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledControlPanel>
        <Link to="about" spy={true} smooth={true} duration={750}>
          <Button $isSmall={true} $variant="secondary">
            About
          </Button>
        </Link>

        <Link to="resume" spy={true} smooth={true} duration={750}>
          <Button $isSmall={true} $variant="secondary">
            Resume
          </Button>
        </Link>

        <Link to="#projects" spy={true} smooth={true} duration={750}>
          <Button $isSmall={true} $variant="secondary">
            Projects
          </Button>
        </Link>

        <Link to="#contact" spy={true} smooth={true} offset={64} duration={750}>
          {/* <a onClick={scrollToBottom}> */}
          <Button $isSmall={true} $variant="secondary">
            Contact
          </Button>
          {/* </a> */}
        </Link>
      </StyledControlPanel>
    </StyledNavbar>
  );
};

export default Navbar;
