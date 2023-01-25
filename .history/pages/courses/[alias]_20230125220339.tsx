import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../layout/layout';

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

		</>
	);
}
export default withLayout(Home);
