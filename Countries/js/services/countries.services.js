'use strict'

function getCountryInfo(countryName, cb) {
    const url = `https://restcountries.com/v3.1/name/${countryName}`

    $.get(url, res=>{
        cb(res)
      })
}