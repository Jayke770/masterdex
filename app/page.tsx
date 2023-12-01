import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Coins from "./coins"
import Trending from './trending'
import RektCoins from "./rekt-coins"
export default function Page() {
  return (
    <main className='p-4'>
      <Tabs defaultValue="trending">
        <TabsList className="grid w-full md:w-96 grid-cols-3">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="coins">Coins</TabsTrigger>
          <TabsTrigger value="rekt-coins">REKT Coins</TabsTrigger>
        </TabsList>
        <TabsContent value="trending">
          <Trending />
        </TabsContent>
        <TabsContent value="coins">
          <Coins />
        </TabsContent>
        <TabsContent value="rekt-coins">
          <RektCoins />
        </TabsContent>
      </Tabs>
    </main>
  )
}