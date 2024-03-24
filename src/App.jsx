
import './App.css'
import { Catalog } from './views/Catalog'
import { Country } from './views/Country'
import { SetStyle } from './components/SetStyle'
import { useState } from 'react'

export function App() {
  const [currentPath] = useState(window.location.pathname)


  return (
    <>
      <header className='header'>
        <section className='container'>
          <h1>Where in the world?</h1>
          <SetStyle
         />
        </section>
      </header>
      { currentPath !== '/' && <Country />}
      { currentPath === '/' && <Catalog />}
    </>
  )
}

