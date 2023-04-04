import React from 'react';
import {ComponentMeta,ComponentStory} from '@storybook/react'; 
import { TextContent,TProps } from './TextContent';

const meta: ComponentMeta<typeof TextContent> = {
  title:'Atomic Design/Atoms/TextContent',
  component:TextContent,
  argTypes: {
    children: {
      defaultValue:"default Text..."
    }
  }
}

export default meta;
//stories
export const small = () => <TextContent size='small' clr='dark'>Hola!</TextContent>
export const large = () => <TextContent size='large' clr='light'>I'm Text </TextContent>

//no.of stories increases
const Template: ComponentStory<typeof TextContent> =(args) => <TextContent {...args}/>

export const other1 = Template.bind({});
export const other2 = Template.bind({});

other1.args={
    size:'small',
    children: 'Have a nice day!',
};

other2.args={
  size:'large',
  children: 'welcome',
};