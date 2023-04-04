import React from 'react';
import {Icon,Props} from './Icon';
import {ComponentMeta,ComponentStory} from '@storybook/react'; 


const meta: ComponentMeta<typeof Icon> ={
    title:'Atomic Design/Atoms/Icon',
    component:Icon,
    argTypes: {
        label: {
            defaultValue:"default Icon.."
        }
    }
}

export default meta;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const small = Template.bind({});
export const medium = Template.bind({});
export const large = Template.bind({});
export const light = Template.bind({});
export const dark = Template.bind({});

small.args ={
    size: 'small',
    label: "I'm a small Icon"
}

medium.args ={
    size: 'medium',
    label: "I'm a medium Icon"
}

large.args ={
    size: 'large',
    label: "I'm a large Icon"
}

light.args ={
    clr: 'light',
    label: "I'm a light Icon"
}

dark.args ={
    clr: 'dark',
    label: "I'm a dark Icon"
}