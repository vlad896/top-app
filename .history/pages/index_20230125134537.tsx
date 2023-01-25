
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/layout';
import axios from 'axios';

function Home() {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);
	useEffect(() => {
		console.log('counter' + counter);
		return function cleam() {
			console.log('unmount');
		};
	});
	return (
		<>
			<Htag tag='h2'>{counter}</Htag>
			<Button appearance='primary' arrow='down' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка</Button>
			<Ptag size='big'>big</Ptag>
			<Ptag size='medium'>medium</Ptag>
			<Ptag size='small'>small</Ptag>
			<Tag size='small' color='green' href='www.google.com'>fasdffs</Tag>
			<Tag size='medium' color='primary' href='www.google.com'>fasdffs</Tag>
			<Rating rating={rating} setRating={setRating} isEditable ></Rating>
		</>
	);
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find');
	return {
		props: {

		}
	};
};