'use client';
import React from 'react';
import tw from 'twin.macro';
import { Button } from '../components';
import { Test } from '@/components/Test';
import { Navbar } from '@/components/Navbar';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex h-screen justify-center`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon `,
  ],
};

const Home = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Navbar />
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
