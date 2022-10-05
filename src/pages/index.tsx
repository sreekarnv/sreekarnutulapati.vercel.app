import type { NextPage } from 'next';
import Seo from '@/components/shared/seo';
import Button from '@/components/shared/button';

const HomePage: NextPage = () => {
  return (
    <>
      <Seo />
      <div>
        <h1>Home Page</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant={'primary'}>Get Started</Button>
          <Button variant={'secondary'}>Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
