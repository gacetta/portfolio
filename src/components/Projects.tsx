import tw from 'twin.macro';
import { Section, SectionContainer, SectionHeader } from './index';

const Projects = () => {
  return (
    <Section>
      <SectionHeader>Projects</SectionHeader>
      <SectionContainer>
        <ul>
          <li>
            <h4>QuizCards</h4>
            <div>Screenshot</div>
            <h5>
              An educational flashcard application to explore web development
              technologies and concepts.
            </h5>
            <ul tw="flex">
              <li>
                <div>icon</div>
                <p>JavaScript</p>
              </li>
              <li>
                <div>icon</div>
                <p>React</p>
              </li>
              <li>
                <div>icon</div>
                <p>React Router</p>
              </li>
              <li>
                <div>icon</div>
                <p>Node.js</p>
              </li>
              <li>
                <div>icon</div>
                <p>Express.js</p>
              </li>
              <li>
                <div>icon</div>
                <p>PostgreSQL</p>
              </li>
            </ul>
          </li>
          <li>
            <h4>SwatchMyImage</h4>
            <div>Screenshot</div>
            <h5>An application that generates color palette from images.</h5>
            <ul tw="flex">
              <li>
                <div>icon</div>
                <p>JavaScript</p>
              </li>
              <li>
                <div>icon</div>
                <p>Typescript</p>
              </li>
              <li>
                <div>icon</div>
                <p>React</p>
              </li>
              <li>
                <div>icon</div>
                <p>Material UI</p>
              </li>
              <li>
                <div>icon</div>
                <p>Node.js</p>
              </li>
              <li>
                <div>icon</div>
                <p>Express.js</p>
              </li>
              <li>
                <div>icon</div>
                <p>PostgreSQL</p>
              </li>
            </ul>
          </li>
        </ul>
      </SectionContainer>
    </Section>
  );
};

export default Projects;
