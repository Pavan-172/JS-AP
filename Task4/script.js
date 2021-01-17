var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);
request.send();

request.onload = function(){
   
    let  countrydata= JSON.parse(this.response);
    let cont = countrydata.filter((x)=> x.region = 'Asia');
    console.log(cont);

      //Countries with population less than 2 lakhs
      let countriesPopulation = countrydata.filter( (x)=> x.population<200000);
      console.log(countriesPopulation);
  
      //Country name capital and flag
      countrydata.forEach(element => {
         console.log(`${element.name} - ${element.capital} - ${element.flag}`); 
      });
      
      //Total population of all countries
  
      let totalPopulation = countrydata.reduce((sum, currValue) => sum+currValue.population,0);
      console.log(`Total population : ${totalPopulation}`);
  
      //Countries which use US dollars
      let countriesUsingUsDollars = countrydata.filter((x) => {
          let check = false;
          for(let cur in x.currencies){
              if(x.currencies[cur].code == 'USD'){
                  check = true;
                  break;
              }
          }
          return check;
      }).map(x => console.log(x.name));
     
  
  }

