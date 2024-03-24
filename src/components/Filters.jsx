
import { MyInput } from '../components/MyInput'
import { useFilter } from '../hooks/useFilter'

export function Filters() {
  const { filters, dispatchSearch, dispatchRegion } = useFilter()

  function handleInput(newValue) {
    dispatchSearch(newValue)
  }

  function handleSelect(e) {
    dispatchRegion(e.target.value)
  }

  return (
    <section className='flex justify-between' >
      <MyInput value={filters.search} callbackOnChange={handleInput}/>

      <select name="region" id="region" className='mySelect' onChange={handleSelect}>
        <option value="all">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  )
}