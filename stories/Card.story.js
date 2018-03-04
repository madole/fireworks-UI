import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import Card from '../src/components/Card';
import { purpleBackground } from './util';



const item = {
    where: 'Sydney Opera House',
    date: new Date(),
    type: 'Aerial Shells 50m',
    from: '8pm',
    to: '9pm',
}

storiesOf('Card', module)
    .addDecorator(purpleBackground)
    .add('item', () => (
        <Card item={item} />
    ));