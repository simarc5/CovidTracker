
const country_name_element = document.querySelector("country.name");
const total_cases_elements = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");


let app_data = [],
cases_list =[],
recovered_list =[],
deaths_list =[],
deaths = [];

let country_code = geoplugin_countryCode();
let user_country;
country_list.forEach( country =>{
	if(country.code== country_code){
		user_country = country.name;
	}
});

console.log(user_country);


// var url = `https://covid-193.p.rapidapi.com/history?country=${user_country}`



/* ---------------------------------------------- */
/*                API URL AND KEY                 */
/* ---------------------------------------------- */


function fetchData(user_country){
	fetch(`https://covid-193.p.rapidapi.com/history?country=${user_country}`,  {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "b0710c71bcmsh1ebd38a2b09d363p1d21fajsn5180f7393dd2",
			"x-rapidapi-host": "covid-193.p.rapidapi.com",
			"useQueryString": true
		}
	}).then(response =>{
        return response.json();
	}).then(data =>{

		console.log(data);
	// dates = Object.keys(data);	
	// console.log(dates);
	 
	//  dates.forEach( day=>{
	// 		let Data = data[day];

	// 		app_data.push(Data);
	// 		console.log(app_data);
	// 	//    cases_list.push(parseInt(Data.total_cases.replace(/,/g,"")));

	//  })

	})
}










fetchData(user_country);
