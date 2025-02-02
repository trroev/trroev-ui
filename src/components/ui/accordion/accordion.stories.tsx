import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

const items = [
  {
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    id: '1',
    title: "What's the best thing about Switzerland?",
  },
  {
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    id: '2',
    title: "What's the best thing about Switzerland?",
  },
  {
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    id: '3',
    title: "What's the best thing about Switzerland?",
  },
  {
    content:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    id: '4',
    title: "What's the best thing about Switzerland?",
  },
]

const meta: Meta<typeof Accordion> = {
  title: 'ui/Accordion',
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion collapsible type="single" className="mx-auto mt-3 max-w-sm">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
