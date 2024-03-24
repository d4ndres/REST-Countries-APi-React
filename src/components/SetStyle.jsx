
import { useState, useEffect } from 'react'

export function SetStyle() {
  const [theme, setTheme] = useState('light')

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
    <article className="button-style" onClick={handle}>{theme == 'dark' ? '🌙 Dark Mode' : '☀ Light Mode'}</article>
  )
}