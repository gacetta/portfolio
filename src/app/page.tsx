'use client';
import React from 'react';
import tw, { css } from 'twin.macro';
import {
  Navbar,
  Hero,
  About,
  Resume,
  Projects,
  Contact,
  Footer,
  StickyHeader,
} from '../components';

// const styles = {
//   // Move long class sets out of jsx to keep it scannable
//   container: ({ hasBackground }: { hasBackground: boolean }) => [
//     tw`flex flex-col justify-center`,
//     hasBackground && tw`bg-gradient-to-b from-electric to-ribbon `,
//   ],
// };
// <div tw="relative flex flex-col justify-center" css={styles.container({ hasBackground: true })}></div>

const Home = () => (
  <div tw="relative flex flex-col justify-center">
    <StickyHeader />
    <Navbar />
    <Hero />
    <About />
    <Resume />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

// const Home = () => (
// <div css={styles.container({ hasBackground: true })}>
//     <div tw="flex flex-col justify-center h-full gap-y-5 ">
//       <Button $variant="primary">Submit</Button>
//       <Button $variant="secondary">Cancel</Button>
//       <Button $isSmall>Close</Button>
//     </div>
//     <Test $hasBg="true" />
//     <Logo />
//   </div>
// );

export default Home;
