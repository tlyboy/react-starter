import { FC, ReactNode } from 'react'
import NavBar from '@/components/NavBar'

const Home: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      {children}
      <NavBar className="mt-6" />
    </main>
  )
}

export default Home
