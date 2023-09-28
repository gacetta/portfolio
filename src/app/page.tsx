'use client';
import React from 'react';
import tw from 'twin.macro';
import { Logo, Button } from '../components';
import { Test } from '@/components/Test';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex h-screen flex-col items-center justify-center`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon `,
  ],
};

const Home = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5 ">
      <Button $variant="primary">Submit</Button>
      <Button $variant="secondary">Cancel</Button>
      <Button $isSmall>Close</Button>
    </div>
    <Test $hasBg="true" />
    {/* <Logo /> */}
  </div>
);

export default Home;
