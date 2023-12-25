import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icon } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-24">
      <h1 className="font-geist text-7xl">Hello World</h1>
      <Icon.pizza />
      <Input placeholder="Start Typing..." />
      <Button>Button</Button>
    </main>
  )
}
