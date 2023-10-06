import tw from 'twin.macro';
import {
  Section,
  SectionHeader,
  SectionContainer,
  ProfileImage,
  ProfileBio,
} from './index';

const About = () => {
  return (
    <Section id="about" $isFullScreen={true}>
      <SectionContainer>
        <SectionHeader>about me:</SectionHeader>
        <article tw="flex items-center justify-center gap-4 p-4">
          <ProfileImage />
          <ProfileBio />
        </article>
        <article>
          <h3>Current Tech Stack:</h3>
          <ul tw="flex">
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>JavaScript</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>TypeScript</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>React</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Next.js</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Styled-Components</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>TailwindCSS</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Node.js</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Express.js</p>
            </li>
          </ul>
        </article>
        <article>
          <h3>Other Technologies:</h3>
          <ul tw="flex">
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>GraphQL</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Bash</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Redux</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Webpack</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Firebase</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>SASS</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Chakra</p>
            </li>
            <li tw="flex flex-col items-center m-2 ">
              <div>icon</div>
              <p>Vite</p>
            </li>
          </ul>
        </article>
      </SectionContainer>
    </Section>
  );
};

export default About;
