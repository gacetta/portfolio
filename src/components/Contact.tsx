import tw from 'twin.macro';
import { Section, SectionContainer, SectionHeader } from './index';

const Contact = () => {
  return (
    <Section id="#contact">
      <SectionHeader>Contact</SectionHeader>
      <SectionContainer>
        <ul>
          <li tw="flex">
            <div>icon</div>
            <p>michael.gacetta@gmail.com</p>
          </li>
          <li tw="flex">
            <div>icon</div>
            <p>360.791.1333</p>
          </li>
          <li tw="flex">
            <div>icon</div>
            <p>@gacetta</p>
          </li>
          <li tw="flex">
            <div>icon</div>
            <p>@gacetta</p>
          </li>
          <li tw="flex">
            <div>icon</div>
            <p>@gacetta</p>
          </li>
        </ul>
      </SectionContainer>
    </Section>
  );
};

export default Contact;
