/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import SwitchListItem from '../SwitchListItem';

describe('SwitchListItem', () => {
	it('should render correctly and handle change event', () => {
		const onValueChange = jest.fn();

		const { getByTestId } = render(
			<SwitchListItem
				index={0}
				item={{
					title: 'Test Switch',
					disabled: false,
					value: true,
					onValueChange
				}}
			/>
		);

		expect(getByTestId('title')).toHaveTextContent('Test Switch');

		const switchItem = getByTestId('switch');
		expect(switchItem).toHaveProp('disabled', false);
		expect(switchItem).toHaveProp('value', true);

		expect(onValueChange).not.toHaveBeenCalled();
		fireEvent(switchItem, 'onValueChange', false);
		expect(onValueChange).toHaveBeenCalled();
	});

	it('should render subtitle if provided', () => {
		const { getByTestId } = render(
			<SwitchListItem
				index={0}
				item={{
					title: 'Test Switch',
					subtitle: 'Test Subtitle',
					disabled: false,
					value: true,
					onValueChange: jest.fn()
				}}
			/>
		);

		expect(getByTestId('subtitle')).toHaveTextContent('Test Subtitle');
	});
});
