interface Country {
  name: string;
  population: number;
  capital: string;
}

export default function CountryName({ params }: {params: { country_name: string}}) {
  
    const countries: Country[] = [
  
    {
      name: "Pakistan",
      population: 21000000,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 1455450025,
      capital: "Delhi",
    },
    {
      name: "Iran",
      population: 91862111,
      capital: "Tehran",
    },
    {
      name: "China",
      population: 1418188971,
      capital: "Beijing",
    },
    {
      name: "Japan",
      population: 123753041,
      capital: "Tokyo",
    },
  ];



  function findCountry(country_url: string): Country | undefined {
     return countries.find((country) => country.name.toLowerCase() === country_url.toLowerCase());
  }

  const result = findCountry(params.country_name);

return (
     <div>
          {

          result ? (
     <>
     <h1>Country Name:{result.name}</h1>
      <h1>Country Capital: {result.capital} </h1>
      <h1>county Population: {result.population}</h1>
     </>
  ) : (
          <h1>{params.country_name} not Found</h1>
  )
}
     </div>
  );
}
