import type { Meta } from '@storybook/react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, CardFooter, CardHeader, type CardProps } from './card'
import { card } from './card.variants'

export default {
  title: 'ui/Card',
  component: Card,
  args: {} satisfies CardProps,
  argTypes: {
    shadow: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg'],
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    isFooterBlurred: {
      control: {
        type: 'boolean',
      },
    },
    isHoverable: {
      control: {
        type: 'boolean',
      },
    },
    isPressable: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<typeof Card>

const defaultProps = {
  ...card.defaultVariants,
}

const Template = (args: CardProps) => (
  <Card {...args} className="mx-auto max-w-md">
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    </CardBody>
  </Card>
)

const WithFooterTemplate = (args: CardProps) => (
  <Card {...args} className="mx-auto max-w-md p-4">
    <CardHeader className="flex gap-3">
      <Image
        alt="heroui logo"
        height={34}
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width={34}
      />
      <div className="flex flex-col">
        <b className="text-lg">HeroUI</b>
        <p className="text-default-500">heroui.com</p>
      </div>
    </CardHeader>
    <CardBody className="py-2">
      <p>Make beautiful websites regardless of your design experience.</p>
    </CardBody>
    <CardFooter>
      <Link href="https://github.com/heroui-inc/heroui" target="_blank">
        Visit source code on GitHub.
      </Link>
    </CardFooter>
  </Card>
)

const WithBackgroundImageTemplate = (args: CardProps) => (
  <Card {...args} className="mx-auto max-w-[20rem]">
    <CardHeader className="absolute top-2 z-20">
      <div className="flex flex-col">
        <p className="font-bold text-white/60 text-xs uppercase">
          What to watch
        </p>
        <p className="text-2xl text-white">Stream the Apple event</p>
      </div>
    </CardHeader>
    <Image
      alt="Card background"
      className="h-[440px] w-full object-cover brightness-50"
      height={440}
      src="https://picsum.photos/id/56/200/300"
      width={330}
    />
  </Card>
)

const WithBackgroundImageAndFooterTemplate = (args: CardProps) => (
  <Card {...args} isFooterBlurred className="mx-auto h-[24rem] max-w-md">
    <CardHeader className="absolute top-1 z-10 flex-col items-start">
      <p className="font-bold text-background/60 text-xs uppercase">New</p>
      <h4 className="font-medium text-2xl text-background">Acme camera</h4>
    </CardHeader>
    <Image
      alt="Card example background"
      className="size-full object-cover"
      height={400}
      src="https://picsum.photos/id/2/400/400"
      width={400}
    />
    <CardFooter className="absolute bottom-0 z-10 justify-between border-border border-t bg-white/30">
      <div>
        <p className="text-black text-xs">Available soon.</p>
        <p className="text-black text-xs">Get notified.</p>
      </div>
      <button type="button">Notify Me</button>
    </CardFooter>
  </Card>
)

export const Default = {
  args: {
    ...defaultProps,
  },

  render: Template,
}

export const WithFooter = {
  args: {
    ...defaultProps,
  },

  render: WithFooterTemplate,
}

export const WithBackgroundImage = {
  args: {
    ...defaultProps,
  },

  render: WithBackgroundImageTemplate,
}

export const WithBackgroundImageAndFooter = {
  args: {
    ...defaultProps,
  },

  render: WithBackgroundImageAndFooterTemplate,
}
