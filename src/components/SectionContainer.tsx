import tw, { css, styled } from 'twin.macro';

const SectionContainer = styled.div(() => [
  tw`
  container
  `,
  css`
    background-color: white;
    height: 100%;
  `,
]);

export default SectionContainer;
