import React from "react";
import { useState, useEffect } from "react";

import cities from 'cities.json';

export default function Search({setCity, city}) {
    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setList(find(query, cities))
        }, 1000);
        return () => clearTimeout(timer);
      }, [query]);

    function handleChange(e) {
        setQuery(capitalize(e.target.value))
    }

    function handleFocus() {
        setShow(!show)
    }

    function handleClick(c) {
        const input = document.getElementById('search-bar')
        setShow(false)
        setCity(c)
        input.value = c.name + ', ' + c.country 
    }

    return (
        <div className="search">
            <input id="search-bar" className="search_bar" spellcheck="false" type="text" defaultValue={city} onChange={(e) =>handleChange(e)} onFocus={setShow}></input>
            <div className="search_list">
                {show && list.map((place) => {
                    return (
                        <div className="search_list_item" onClick={() => handleClick(place)}>
                            <p>
                                {place.name + ', ' + place.country }
                            </p>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}


function find(query, arr) {
    let list = []
    if (query !== '') {
        for (let i = 0; i < arr.length; i++) {
            if (cities[i].name.includes(query) && list.length < 10) {
                list.push(cities[i])
            }
        }
    }
    return list
}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}