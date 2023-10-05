import tw, { styled } from 'twin.macro';
import Button from './Button';

const StyledFooter = tw.div`
  z-50
  flex
  h-16
  max-h-16
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

const Navbar = () => {
  return (
    <StyledFooter>
      <p tw="text-4xl text-center">Footer</p>
      <StyledControlPanel>
        <Button $isSmall={true} $variant="secondary">
          To Top
        </Button>
      </StyledControlPanel>
    </StyledFooter>
  );
};

export default Navbar;
