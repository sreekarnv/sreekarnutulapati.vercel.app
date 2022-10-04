import type { NextPage } from 'next';
import Image from 'next/image';
import Seo from '../components/shared/seo';

const Home: NextPage = () => {
	return (
		<>
			<Seo />
			<div>
				<h1>Home Page</h1>
			</div>
		</>
	);
};

export default Home;
