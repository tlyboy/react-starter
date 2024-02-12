function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
          {' '}
          {count}
        </button>
      </div>
    </>
  )
}

export default App
