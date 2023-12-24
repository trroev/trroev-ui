import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-24">
      <h1 className="font-geist text-7xl">Hello World</h1>
      <Icons.pizza />
      <Button>Button</Button>
    </main>
  )
}
