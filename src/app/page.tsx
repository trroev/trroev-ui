import { Accordion, AccordionItem, Avatar, AvatarImage } from '@/components/ui/'

export default function Home() {
  const accordionContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus odio sequi hic maiores, unde saepe tempora laborum quam iusto totam, expedita beatae! Odio, laboriosam?'
  return (
    <main className="flex flex-col items-center gap-12 p-24">
      <h1 className="font-geist text-7xl">Hello World</h1>
      <Avatar>
        <AvatarImage src="https://github.com/trroev.png" alt="trroev" />
      </Avatar>
      <Accordion className="w-full">
        <AccordionItem title="Accordion Item 1">
          {accordionContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 2">
          {accordionContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 3">
          {accordionContent}
        </AccordionItem>
      </Accordion>
    </main>
  )
}
