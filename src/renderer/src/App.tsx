function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex justify-center items-center">
      <button
        onClick={() => {
          console.log('GGs')
        }}
        className="px-5 rounded-lg py-2 bg-purple-700 text-white"
      >
        Hello
      </button>
    </div>
  )
}

export default App
