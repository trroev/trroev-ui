import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionProps,
  AccordionTitle,
} from '.'

export default {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Accordion>

const defaultProps: AccordionProps = {
  onClick: action('onClick'),
}

const Template = (args: AccordionProps) => {
  const accordionContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus odio sequi hic maiores, unde saepe tempora laborum quam iusto totam, expedita beatae! Odio, laboriosam?'

  return (
    <div className="w-[350px]">
      <Accordion {...args} className="w-full">
        <AccordionItem>
          <AccordionTitle>Accordion Title 1</AccordionTitle>
          <AccordionContent>
            <p>{accordionContent}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle>Accordion Title 2</AccordionTitle>
          <AccordionContent>
            <p>{accordionContent}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle>Accordion Title 3</AccordionTitle>
          <AccordionContent>
            <p>{accordionContent}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const Default = {
  render: Template,

  args: { ...defaultProps },
}
