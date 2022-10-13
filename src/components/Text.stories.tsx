import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum'
  }
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}
export const Default: StoryObj<TextProps> = {}


export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComonent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  }
}