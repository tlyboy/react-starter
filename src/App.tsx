import nProgress from 'nprogress'
import routes from '~react-pages'

function App() {
  nProgress.start()
  nProgress.done()

  return useRoutes(routes)
}

export default App
