import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import Directions from '../src/components/Directions';
import { purpleBackground } from './util';

storiesOf('Directions', module)
	.addDecorator(purpleBackground)
	.add('width link', () => <Directions where="24 george street sydney" />);

