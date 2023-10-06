import tw from 'twin.macro';

const StyledSection = tw.section`
  relative
  flex
  max-h-screen
  min-h-screen
  flex-col
  items-center
  justify-center
  border-8
  bg-yellow-300
`;

const Section = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => {
  return <StyledSection id={id}>{children}</StyledSection>;
};

export default Section;
