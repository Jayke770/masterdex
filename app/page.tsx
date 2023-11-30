import Header from './header'
import Coins from './coins'
export default function Page() {
  return (
    <>
      <Header />
      <main className='p-4'>
        <Coins />
      </main>
    </>
  )
}