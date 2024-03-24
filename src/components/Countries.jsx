import countriesJSONs from '../mocks/data.json'

import { useFilter } from '../hooks/useFilter'

export function Countries() {
  const { countriesFiltered } = useFilter()
  const countries = countriesFiltered(countriesJSONs)


  return (
    <section className='countries'>
      {countries.map((country, index) => (
        <a href={`/alpha/${country.alpha2Code}`} key={index} className='country'>
          <img src={country.flag} alt={country.name} />
          <section className="county-info">
            <h3>{country.name}</h3>
            <p><strong>Population: </strong>{country.population}</p>
            <p><strong>Region: </strong>{country.region}</p>
            <p><strong>Capital: </strong>{country.capital}</p>
          </section>
        </a>
      ))}
    </section>
  )
}