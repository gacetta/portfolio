import tw, { styled } from 'twin.macro';
import Button from './Button';

const StyledNavbar = tw.div`
  fixed
  inset-0
  z-50
  flex
  h-16
  max-h-16
  w-screen
  items-center
  justify-between
  space-x-3
  p-3
  pl-7
  pr-7
`;

const StyledControlPanel = tw.div`
  flex
  space-x-3
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <p tw="text-4xl">Navbar</p>
      <StyledControlPanel>
        <Button $isSmall={true} $variant="secondary">
          About
        </Button>
        <Button $isSmall={true} $variant="secondary">
          Resume
        </Button>
        <Button $isSmall={true} $variant="secondary">
          Projects
        </Button>
        <Button $isSmall={true} $variant="secondary">
          Contact
        </Button>
      </StyledControlPanel>
    </StyledNavbar>
  );
};

export default Navbar;
