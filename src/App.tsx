import { FC, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import nProgress from 'nprogress'

const App: FC = () => {
  nProgress.start()
  nProgress.done()

  return <Suspense>{useRoutes(routes)}</Suspense>
}

export default App
