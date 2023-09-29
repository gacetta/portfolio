import tw, { styled } from 'twin.macro';
import Button from './Button';

const StyledNavbar = tw.div`
  to-gray
  flex
  max-h-16
  w-screen
  items-center
  justify-between
  space-x-3
  bg-gradient-to-r
  from-transparent
  from-15%
  to-75%
  p-3
  pl-5
`;

const StyledControlPanel = tw.div`
  flex
  space-x-3
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <p tw="text-4xl">Michael Gacetta</p>
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
