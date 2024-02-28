import nProgress from 'nprogress'
import { Suspense } from 'react'
import routes from '~react-pages'

function App() {
  nProgress.start()
  nProgress.done()

  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

export default App
