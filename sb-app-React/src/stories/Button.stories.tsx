import React from 'react';
import {ComponentMeta,ComponentStory} from '@storybook/react'; 
import { Button,IProps } from './Button';

const meta: ComponentMeta<typeof Button> = {
  title:'Atomic Design/Atoms/Button',
  component:Button,
  argTypes: {
    children: {
      defaultValue:"default Text"
    }
  }
}

export default meta;
//stories
export const Default = () => <Button variant='primary'>CLICK ME!</Button>
export const secondary = () => <Button variant='secondary'>I'm Button</Button>

//no.of stories increases
const Template: ComponentStory<typeof Button> =(args) => <Button {...args}/>

export const other1 = Template.bind({});
export const other2 = Template.bind({});

other2.args={
  variant: 'secondary',
  children: 'I\'m secondary',
};