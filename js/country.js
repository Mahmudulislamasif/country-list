


const getAllCountries=(url)=>
{
    fetch(url)
    .then(res=>res.json())
    .then(data=>getCountries(data))
}

document.getElementById('all-countries').addEventListener('click',function()
{
 getAllCountries(`https://restcountries.com/v3.1/all`) 
})
document.getElementById('asian-countries').addEventListener('click',function()
{
 getAllCountries(`https://restcountries.com/v3.1/region/asia`) 
})
document.getElementById('europe-countries').addEventListener('click',function()
{
 getAllCountries(`https://restcountries.com/v3.1/region/europe`) 
})
document.getElementById('oceania-countries').addEventListener('click',function()
{
 getAllCountries(`https://restcountries.com/v3.1/region/oceania`) 
})
document.getElementById('america-countries').addEventListener('click',function()
{
 getAllCountries(`https://restcountries.com/v3.1/region/ame`) 
})





const getCountries=(country)=>
{
    const mainDiv=document.getElementById('main-div');
    mainDiv.textContent=''
    for(const countries of country)
    {
        console.log(countries.capital)
        const div=document.createElement('div');
        div.classList.add('col-12','col-md-4')
        div.innerHTML=`
        <div class="card shadow-lg" style="width: 18rem;">
        <img src="${countries.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${countries.name.common}</h5>
            <p class="card-text">${countries.capital}</p>
            <p class="card-text">Population: ${countries.population}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
       </div>
        `
        mainDiv.appendChild(div)
    }
}

document.getElementById('search-button').addEventListener('click',function()
{
    const searchText=document.getElementById('search-text');
    const searchTextValue=searchText.value;
    fetch(`https://restcountries.com/v3.1/name/${searchTextValue}`)
    .then(response=>response.json())
    .then(newData=>getCountries(newData))
})
