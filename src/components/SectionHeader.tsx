import tw, { styled } from 'twin.macro';

const StyledHeader = tw.h1`
  uppercase
`;

interface SectionHeaderProps {
  text?: string;
}

// const SectionHeader = ({ text }: SectionHeaderProps) => {
//   return <StyledHeader>test</StyledHeader>;
// };

const SectionHeader = styled.h2<SectionHeaderProps>(({ text }) => [
  tw`m-4 mt-28 p-4 text-center text-5xl font-semibold uppercase`,
]);

export default SectionHeader;
