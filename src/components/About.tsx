import tw from 'twin.macro';
import { Section, SectionHeader, SectionContainer } from './index';

const About = () => {
  return (
    <Section id="about">
      <SectionHeader>about me:</SectionHeader>
      <SectionContainer>
        <div>ProfilePic</div>
        <h3>Hello world!</h3>
        <p>
          My name is Michael Gacetta and I am a passionate engineer who loves to
          build things. Originally from the Pacific Northwest, I spent nearly 15
          years in NYC working on Broadway before returning to the West Coast to
          pursue a career in software engineering. I enjoy puzzles & crosswords,
          art (glassblowing & ceramics), the outdoors (especially being near
          water), laughing, cooking and games both board and video.
        </p>
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
      </SectionContainer>
    </Section>
  );
};

export default About;
