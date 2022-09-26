

// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

// Handle noon and midnight specially:

// timeWord("00:00")
// // 'midnight'

// timeWord("12:00")
// // 'noon'
// Otherwise, covert times to text:

// timeWord("01:00")
// // "one o'clock am"

// timeWord("06:01")
// // 'six oh one am'

// timeWord("06:10")
// // 'six ten am'

// timeWord("06:18")
// // 'six eighteen am'

// timeWord("06:30")
// // 'six thirty am'

// timeWord("10:34")
// // 'ten thirty four am'
// Don’t forget to handle early morning properly:

// timeWord("00:12")
// // 'twelve twelve am'
// For times after noon, add ‘pm’:

// timeWord("12:09")
// // 'twelve oh nine pm'

// timeWord("23:23")
// 'eleven twenty three pm'








const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']


function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }

    if (time === '12:00') {
        return 'noon'
    }

    let [hrs, mins] = time.split(':')
    hrs = parseInt(hrs)
    mins = parseInt(mins)

    let str = hours[hrs % 12] + ' '

    if (mins >= 20) {
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}