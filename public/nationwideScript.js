const api_url = "https://api.covidtracking.com/v1/us/current.json";

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
          <th>Date</th>
          <th>States</th>
          <th>Positive</th>
          <th>death</th>
          <th>Hospitalized Currently<th>
         </tr>`;  

        tab += `<tr> 
        <td style = "width: 100px">${data[0].date} </td>
        <td style = "width: 100px">${data[0].states}</td>
        <td style = "width: 100px">${data[0].positive}</td> 
        <td style = "width: 100px">${data[0].death}</td>
        <td>${data[0].hospitalizedCurrently}</td>          
        </tr>`;

    // Setting innerHTML as tab variable
    document.getElementById("US_table").innerHTML = tab;
}