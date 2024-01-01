import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Textarea,
} from '@/components/ui/'
import { Icon } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-24">
      <h1 className="font-geist text-7xl">Hello World</h1>
      <Icon.pizza className="h-20 w-20" />
      <Card className="max-w-sm" radius="lg" isBlurred>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card Description</CardSubtitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <div className="flex w-full max-w-sm flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="trevor.mathiak@fusionary.com"
        />
        <Checkbox />
        <Textarea placeholder="Start Typing..." />
      </div>
      <Button>Button</Button>
    </main>
  )
}
