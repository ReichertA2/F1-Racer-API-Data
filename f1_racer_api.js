
function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("season")[0]. value) //[0] since there is only have one element on our page with the name season which is the year. value is the html property for whatever is typed into that box.
    console.log(document.getElementsByName("round")[0]. value)
    doAPICall(document.getElementsByName("season")[0]. value, document.getElementsByName("round")[0]. value)

}


async function doAPICall(season, round){
    let result = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(result)
    result=result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(result)

    let tbody=document.getElementsByTagName('tbody')[0];

    for (const racer of result){
        let tr=document.createElement('tr')
        tbody.appendChild(tr)
        let th=document.createElement('th');
        th.scope="row";
        th.innerText=racer.Driver.givenName;
        tr.appendChild(th);

        td=document.createElement('td');
        td.innerText=racer.Driver.familyName;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.position;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.wins;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.Driver.dateOfBirth;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.Driver.nationality;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.Constructors[0].name;
        tr.appendChild(td);
    }
}  



