import tw from 'twin.macro';

const StyledContainer = tw.div`
  bg-green-500
`;

const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default SectionContainer;
