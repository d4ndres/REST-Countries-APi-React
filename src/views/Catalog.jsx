import { Filters } from '../components/Filters'
import { Countries } from '../components/Countries'


export function Catalog() {

  return (
  <section className='body'>
    <section className='container'>
      <Filters />
      <Countries />
    </section>
  </section>
  )
}