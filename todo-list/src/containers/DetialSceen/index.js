import React from 'react';
import Detail from '../../component/Detail';

export default function index({ match }) {
	return (
		<div>
			<Detail id={match.params.id} />
		</div>
	);
}
