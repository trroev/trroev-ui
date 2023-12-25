import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-24">
      <h1 className="font-geist text-7xl">Hello World</h1>
      <Icon.pizza />
      <Button>Button</Button>
    </main>
  )
}
