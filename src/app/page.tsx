import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Icon } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-24">
      <h1 className="font-geist text-7xl">Hello World</h1>
      <Icon.pizza />
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
