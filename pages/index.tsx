
import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag } from '../components';

export default function Home() {
	const [counter, setCounter] = useState<number>(0);
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
		</>
	);
}
