import tw from 'twin.macro';
import { Button, Section, SectionContainer, SectionHeader } from './index';

const Resume = () => {
  return (
    <Section>
      <SectionHeader>resume</SectionHeader>
      <SectionContainer>
        <ul>
          <li>
            <h3>Education</h3>
            <ul>
              <li>
                <h4>
                  Codesmith<span>2023</span>
                </h4>
              </li>
              <li>
                <h4>
                  University of Washington<span>2021-2022</span>
                </h4>
                <h5>
                  Masters Degree, Architecture - <i>incomplete</i>
                </h5>
                <p>Coursework:</p>
                <ul>
                  <li>Programmed CNC machine to play music using G-Code</li>
                  <li>
                    Encoded complex projects for the laser cutter with Rhino &
                    InDesign
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  University of Michigan<span>2003-2007</span>
                </h4>
              </li>
            </ul>
          </li>
          <li>
            <h3>Experience</h3>
            <ul>
              <li>
                <h4>
                  RISE Theatre<span>2023</span>
                </h4>
              </li>
              <li>
                <h4>
                  GraphQL One Stop Shop<span>2023</span>
                </h4>
              </li>
            </ul>
          </li>
          <li>
            <h3>Projects? - Do I Include?</h3>
          </li>
          <li>
            <h3>
              Hobbies
              <ul>
                <li>
                  <h4>Piano</h4>
                </li>
                <li>
                  <h4>Glassblowing</h4>
                </li>
              </ul>
            </h3>
          </li>
        </ul>
        <Button $variant="secondary">Download Resume</Button>
      </SectionContainer>
    </Section>
  );
};

export default Resume;
