'use strict'

function onGetCountryInfo() {
    const countryName = document.querySelector('.country-name').value
    console.log(countryName)

    getCountryInfo(countryName, renderInfo)
}

function renderInfo(data) {
    const elCountryInfo = document.querySelector('.country-info')
    const newData = JSON.stringify(data)
    elCountryInfo.innerHTML = newData
}