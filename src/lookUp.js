export default function lookUpWC(code) {
    let temp = ''
    switch (code) {
      case 0:
        temp = 'clear skies'
        break
      case 1:
      case 2:
      case 3:
        temp = 'cloudy'
        break
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        temp = 'hazy'
        break
      case 10:
        temp = 'misty'
        break
      case 10:
      case 11:
      case 12:
        temp = 'foggy'
        break
      case 13:
        temp = 'a thunderstorm'
        break
      case 14:
      case 15:
      case 16:
        temp = 'raining'
        break
      case 17:
        temp = 'a thunderstorm'
        break
      case 18: 
      case 19: 
        temp = 'cloudy'
        break
      case 20:
        temp = 'drizzling'
        break
      case 21:
        temp = 'raining'
        break
      case 22:
        temp = 'snowing'
        break
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
        temp = 'raining'
        break
      case 28:
        temp = 'foggy'
        break
      case 29:
        temp = 'a thunderstorm'
        break
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
        temp = 'a sandstorm'
        break
      case 36:
      case 37:
      case 38:
      case 39:
        temp = 'snowing'
        break
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
      case 49:
        temp = 'foggy'
        break
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
        temp = 'drizzling'
        break
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 69:
        temp = 'raining'
        break
      case 70:
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
        temp = 'snowing'
        break
      case 80:
      case 81:
      case 82:
      case 83:
      case 84:
        temp = 'raining'
        break
      case 85:
      case 86:
      case 87:
      case 88:
        temp = 'snowing'
        break
      case 89:
      case 90:
        temp = 'hailing'
        break
      case 91:
      case 92:
      case 93:
      case 94:
        temp = 'raining'
        break
      case 95:
      case 96:
      case 97:
      case 98:
      case 99:
        temp = 'a thunderstorm'
        break
      default:
        temp = ''
    }
    return temp
  }
  
function unixToDay(timestamp, i) {
  const a = new Date(timestamp*1000)
  const days = ['SUN','MON','TUES','WED','THURS','FRI','SAT'];
  const dayOfWeek = days[a.getDay()]
  if (i === 1) {
    return 'TMRW'
  } else {
    return (dayOfWeek)
  }
}


export {unixToDay}
