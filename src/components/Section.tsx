import tw, { styled, css, theme } from 'twin.macro';

interface SectionProps {
  $isFullScreen?: boolean;
  id?: String;
  children?: React.ReactNode;
}

const StyledSection = styled.section<SectionProps>(({ $isFullScreen }) => [
  tw`
    relative
    flex 
    h-full 
    flex-col 
    items-center 
    border-2
    border-red-500
    bg-gray
    p-4`,
  $isFullScreen ? tw`max-h-screen min-h-screen` : tw`h-max`,
]);

export default StyledSection;
