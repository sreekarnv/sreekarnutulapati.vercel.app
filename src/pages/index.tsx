import type { NextPage } from 'next';
import Seo from '@/components/shared/seo';

const HomePage: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <div>
        <h1>Yo!</h1>
      </div>
    </>
  );
};

export default HomePage;
