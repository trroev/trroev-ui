import Image from 'next/image'
import { Meta } from '@storybook/react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardProps,
  CardSubtitle,
  CardTitle,
} from '.'
import { Button } from '..'
import bigSur from '../../../../public/images/big-sur.jpg'
import fireworks from '../../../../public/images/fireworks.jpg'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['default', 'withBackgroundImage'],
    },
    description: 'The variant of the card.',
  },
  isBlurred: {
    control: 'boolean',
    description: 'If true, the card background will be blurred.',
  },
  radius: {
    control: {
      type: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    description: 'The radius of the card.',
  },
  shadow: {
    control: {
      type: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    description: 'The shadow of the card.',
  },
}

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>

const defaultProps: CardProps = {
  variant: 'default',
  isBlurred: false,
  radius: 'lg',
  shadow: 'sm',
}

const Template = (args: CardProps) => (
  <Card {...args} className="w-[350px]">
    <CardContent className="p-3">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
    </CardContent>
  </Card>
)

const WithHeaderTemplate = (args: CardProps) => (
  <Card {...args} className="w-[350px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
    </CardHeader>
    <CardContent>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
    </CardContent>
  </Card>
)

const WithHeaderAndFooterTemplate = (args: CardProps) => (
  <Card {...args} className="w-[350px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
    </CardHeader>
    <CardContent>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </CardFooter>
  </Card>
)

const CoverImageTemplate = (args: CardProps) => (
  <Card {...args} className="h-[500px] w-[350px]" variant="withBackgroundImage">
    <Image
      alt="Card background"
      src={bigSur}
      placeholder="blur"
      fill
      sizes="100vw"
      className="z-0 object-cover"
    />
    <CardHeader className="absolute z-10 text-background">
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle className="text-background/75">Card Subtitle</CardSubtitle>
    </CardHeader>
  </Card>
)

const BodyImageTemplate = (args: CardProps) => (
  <Card {...args} className="w-[350px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
    </CardHeader>
    <CardContent className="flex justify-center">
      <Image
        alt="Card background"
        src={fireworks}
        className="h-[200px] w-full rounded-xl object-cover object-center"
      />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </CardFooter>
  </Card>
)

export const Default = {
  render: Template,

  args: { ...defaultProps },
}

export const WithHeader = {
  render: WithHeaderTemplate,

  args: { ...defaultProps },
}

export const WithHeaderAndFooter = {
  render: WithHeaderAndFooterTemplate,

  args: { ...defaultProps },
}

export const WithCoverImage = {
  render: CoverImageTemplate,

  args: { ...defaultProps },
}

export const WithBodyImage = {
  render: BodyImageTemplate,

  args: { ...defaultProps },
}
