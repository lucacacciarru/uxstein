import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from '.';

const DEFAULT_COLOR = 'black.0';
const DEFAULT_SIZE = '7rem';

describe('Icon custom wrapper', () => {
	test('Correctly render a SVG', () => {
		render(<Icon name='Add' />);

		const svg = screen.getByTestId('icon');

		expect(svg).toBeInTheDocument();
	});
	test('Element have a default value if optional props are undefined', () => {
		render(<Icon name='Add' />);

		const svg = screen.getByTestId('icon');

		expect(svg).toHaveStyle({
			color: DEFAULT_COLOR,
			width: DEFAULT_SIZE,
			height: DEFAULT_SIZE,
		});
	});
	test('Element renders with passed values', () => {
		render(<Icon name='Add' color='brand.primary' size='100%' />);

		const svg = screen.getByTestId('icon');

		expect(svg).toHaveStyle({
			color: 'brand.primary',
			width: '100%',
			height: '100%',
		});
	});
});
