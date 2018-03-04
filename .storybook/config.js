import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/DatePicker.story.js');
    require('../stories/Directions.story.js');
    require('../stories/MenuItem.story.js');
    require('../stories/Card.story.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);