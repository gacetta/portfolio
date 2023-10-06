import tw, { styled, css } from 'twin.macro';

const StyledProfileBio = styled.article(() => [
  tw`
  h-full
  border-2
  border-orange-500
  bg-gray
  px-2
`,
  css`
    padding: 1rem;
    height: 100%;
  `,
]);

const ProfileBio = () => {
  return (
    <StyledProfileBio>
      <h3 tw="text-3xl py-2">Hello world!</h3>
      <p tw="pb-2">
        My name is Michael Gacetta and I am a passionate engineer who loves to
        build things.
      </p>
      <p>
        Originally from the Pacific Northwest, I spent nearly 15 years in NYC
        working on Broadway before returning to the West Coast to pursue a
        career in software engineering. I enjoy puzzles & crosswords, art
        (glassblowing & ceramics), the outdoors (especially being near water),
        laughing, cooking and games both board and video.
      </p>
    </StyledProfileBio>
  );
};

export default ProfileBio;
