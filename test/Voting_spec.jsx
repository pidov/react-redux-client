import React from 'react/addons';
import Voting from '../../src/components/Voting';

const {renderIntoDocument} = React.addons.TestUtils;

describe('Voting', () => {
	const component = renderIntoDocument(
		<Voting pair={['Trainspotting', '28 Days Later']} />
	);
})