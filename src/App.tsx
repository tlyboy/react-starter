function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div h-full flex="~ col" items-center justify-center>
        <button btn onClick={() => setCount(count + 1)}>
          +
          {' '}
          {count}
        </button>
      </div>
    </>
  )
}

export default App
