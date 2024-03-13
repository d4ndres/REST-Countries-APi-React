import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Filters } from './components/Filters'
import { Countries } from './components/Countries'


export function App() {
  const [theme, setTheme] = useState('dark')

  function handle() {
    const html = document.querySelector('html')
    if (theme === 'dark') {
      setTheme('light')
      html.setAttribute('data-theme', 'light')
    } else {
      setTheme('dark')
      html.setAttribute('data-theme', 'dark')
    }
  }

  useEffect(() => {
    // mounted
    handle()
  }, [])


  return (
    <>
      <header className='header'>
        <section className='container'>
          <h1>Where in the world?</h1>
          <article onClick={handle}>{theme == 'dark' ? '🌙 Dark Mode' : '☀ Light Mode'}</article>
        </section>
      </header>
      <section className='body'>
        <section className='container'>
          <Filters />
          <Countries />
        </section>
      </section>

    </>
  )
}

