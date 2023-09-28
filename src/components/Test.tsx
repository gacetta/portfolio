import tw, { styled } from 'twin.macro';

interface ContainerProps {
  $hasBg?: string;
}

const Container = styled.div<ContainerProps>(({ $hasBg }) => {
  return [tw`flex w-full p-4`, $hasBg && tw`bg-yellow-100`];
});

const Column = tw.div`w-1/2`;

export const Test = ({ $hasBg }: ContainerProps) => {
  return (
    <Container {...{ $hasBg }}>
      <Column>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Column>
      <Column>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Column>
    </Container>
  );
};
