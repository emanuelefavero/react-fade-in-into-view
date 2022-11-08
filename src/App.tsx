import FadeIntoView from './components/FadeIntoView'
import ExampleElement from './components/ExampleElement'

function App() {
  // Create an array of 100 elements
  const numberOfElements = [...Array(100)]

  return (
    <>
      {numberOfElements.map((_) => (
        // NOTE: THE ONLY IMPORTANT PART IS THE FadeIntoView COMPONENT
        // TIP: Remember that any element inside <FadeInSection /> will have a '.fade-into-view' div as the parent
        <FadeIntoView>
          <ExampleElement _={_} />
        </FadeIntoView>
      ))}
    </>
  )
}

export default App
