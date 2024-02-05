import React from "react"

export default function Indicator({weather, animated, day}) {
    let classname = ''
    if (animated) {
        classname = 'animated'
    } else {
        classname = 'static'
    }
    return (
        <div className={classname}>
        { animated === true && (weather === 'clear skies' && day === 1
            ? <div className="sunny"></div>
            : weather === 'clear skies' && day === 0
            ? <div className="night"></div>
            : (weather === 'cloudy' || weather === 'a sandstorm') && day === 1
            ? <div className="cloudy-base">
                <div className="sun"></div>
              </div>
            : (weather === 'cloudy' || weather === 'a sandstorm') && day === 0
            ? <div className="cloudy-base">
                <div className="moon"></div>
              </div>
            : weather === 'hazy' || weather ===  'misty' || weather ===  'foggy'
            ? <><div className="cloudy-haze">
                <div className="haze haze1"></div>
                <div className="haze-right haze2"></div>
                <div className="haze haze3"></div>
                <div className="haze-left haze4"></div>
                <div className="haze haze5"></div>
            </div>
              </>
            : weather === 'a thunderstorm'
            ? <><div className="cloudy-thunder">
                <div className="drops drop1"></div>
                <div className="drops drop2"></div>
                <div className="drops drop3"></div>
                <div className="drops drop4"></div>
                <div className="drops drop5"></div>
                <div className="drops drop5"></div>
                <div className="drops drop6"></div>
                <div className="drops drop7"></div>
            </div>
            </>
            : weather === 'raining' || weather ===  'drizzling'
            ? <><div className="cloudy-rain"><div className="drops drop1"></div>
            <div className="drops drop2"></div>
            <div className="drops drop3"></div>
            <div className="drops drop4"></div>
            <div className="drops drop5"></div>
            <div className="drops drop5"></div>
            <div className="drops drop6"></div>
            <div className="drops drop7"></div>
            </div></>
            : weather === 'snowing'|| weather ===  'hailing'
            ? <><div className="cloudy-snow">
                <div className="flake flake1"></div>
            <div className="flake flake2"></div>
            <div className="flake flake3"></div>
            <div className="flake flake4"></div>
            <div className="flake flake5"></div>
            <div className="flake flake6"></div>
            <div className="flake flake7"></div>
            <div className="flake flake8"></div>
            <div className="flake flake9"></div>
            <div className="flake flake10"></div>
            </div>
            </>
            : <></>)
            }
            {animated === false && (weather === 'clear skies' || weather === 'a sandstorm'
            ? <span class="material-symbols-outlined icon">Sunny</span>
            : weather === 'cloudy'
            ? <span class="material-symbols-outlined icon">cloud</span>
            : weather === 'hazy' || weather ===  'misty' || weather ===  'foggy'
            ? <span class="material-symbols-outlined icon">foggy</span>
            : weather === 'a thunderstorm'
            ? <span class="material-symbols-outlined icon"> thunderstorm </span>
            : weather === 'raining' || weather ===  'drizzling'
            ? <span class="material-symbols-outlined icon"> rainy </span>
            : weather === 'snowing'|| weather ===  'hailing'
            ? <span class="material-symbols-outlined icon"> weather_hail </span>
            : <></>)}
        </div>
    )
}