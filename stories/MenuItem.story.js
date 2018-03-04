import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import MenuItem from '../src/components/MenuItem';
import { purpleBackground } from './util';

storiesOf('MenuItem', module)
	.addDecorator(purpleBackground)
	.add('with text', () => <MenuItem>Text</MenuItem>)
	.add('with emojis', () => <MenuItem>😃🔥🐝</MenuItem>);
