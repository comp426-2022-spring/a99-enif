//var state_code = document.getElementById('stateSelect').value;
//let state_code_value = state_code.toLowerCase;
//const api_url = "https://api.covidtracking.com/v2/states/" + state_code + ".json";
const api_url = "https://api.covidtracking.com/v2/states/mi.json";
async function getAPI(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getAPI(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>State</th>
          <th>Positive</th>
          <th>Death</th>
          <th>Hospitalized Currently<th>
         </tr>`;  


        tab += `<tr> 
            <td>${data.name} </td>
            <td>${data.positive}</td>
            <td>${data.outcomes.death.confirmed}</td> 
            <td>${data.hospitalization.hospitalized.currently}</td>          
        </tr>`;
    

    // Setting innerHTML as tab variable
    document.getElementById("state_table").innerHTML = tab;
}