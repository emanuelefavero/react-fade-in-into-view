import React from 'react'

function ExampleElement({ _ }: { _: any }) {
  return (
    <>
      <section
        style={{
          backgroundColor: `rgba(0,0,${Math.random() * 255}, 0.1)`,
        }}
      >
        {_}
        <img src={`https://picsum.photos/id/10/200`} alt='...' loading='lazy' />
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
          commodi!
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          pariatur libero tempore minima, maxime error, quaerat culpa maiores
          nobis cupiditate totam aliquam quisquam? Minima dignissimos iusto quae
          molestiae, odit ab.
        </p>
        <div>
          <button>Lorem, ipsum.</button>
        </div>
      </section>
    </>
  )
}

export default ExampleElement
