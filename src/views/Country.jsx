import {useState, useEffect} from 'react'




export function Country() {
  const [country, setCountry] = useState({})
  const [about, setAbout] = useState([])

    useEffect( () => {

      const getCountryByName = async ({name}) => {

        let response 

        if( window.location.pathname.includes('alpha') ) 
        {
          response = await fetch(`https://restcountries.com/v3.1/alpha/${name}`)
        } else {
          response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        }

        const [result] = await response.json()
    
        setCountry(result)
        setAbout([
          { title: 'Native Name', value: result.name.official },
          { title: 'Population', value: result.population },
          { title: 'Region', value: result.region },
          { title: 'Sub Region', value: result.subregion },
          { title: 'Capital', value: result.capital[0] },
          { title: 'Top Level Domain', value: result.tld[0] },
          { title: 'Currencies', value: Object.values(result.currencies).map( currency => currency.name).join(', ') },
          { title: 'Languages', value: Object.values(result.languages).map( language => language).join(', ') },
        ])

        console.log(result);
      }

    const name = window.location.pathname.split('/')[2]
    getCountryByName({name})

  }, [])

  return (
    <section className='body'>
      <section className='container'>
        <a href="/" className="link mb-3" > Back </a>
        
        { !!Object.keys(country).length && 
          <article >
            
            <article className="aboutCountry">
              <figure className="figure-one-flag">
                <img src={country.flags.png} alt="" />
              </figure>
              <article>
                <h2 className="title-country">
                  {`${country.name.common}`}
                </h2>
                <article>
                  <article className="infos-country">
                    <article className="info-country">
                      {
                        about.map( (item, index) => index < 5 && (
                          <article key={item.title}>
                            <strong>{item.title}: </strong>
                            <span>{item.value}</span>
                          </article>
                        ))
                      }
                    </article>
                    <article className="info-country">
                      {
                        about.map( (item, index) => index >= 5 && (
                          <article key={item.title}>
                            <strong>{item.title}: </strong>
                            <span>{item.value}</span>
                          </article>
                        ))
                      }
                    </article>
                  </article>

                  { country.borders && 
                    <article className="border-countries">
                      <strong>Border Countries: </strong>
                      { country.borders.map( border => (
                          <a key={border} className="link" href={`/alpha/${border}`}>
                            {border}
                          </a>
                        ))
                      }
                    </article>
                  }
                </article>
              </article>
            </article>
            
            
          </article>
        }
      </section>
    </section>
  )
}