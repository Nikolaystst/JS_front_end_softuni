function NSS(count, type, day) {
    let finalSum;
    let priceOfTicket = 0;

    if (type === 'Students' && day === 'Friday') {
        priceOfTicket = 8.45
    } else if (type === 'Students' && day === 'Saturday') {
        priceOfTicket = 9.80
    } else if (type === 'Students' && day === 'Sunday') {
        priceOfTicket = 10.46
    } else if (type === 'Business' && day === 'Friday') {
        priceOfTicket = 10.90
    } else if (type === 'Business' && day === 'Saturday') {
        priceOfTicket = 15.60
    } else if (type === 'Business' && day === 'Sunday') {
        priceOfTicket = 16
    } else if (type === 'Regular' && day === 'Friday') {
        priceOfTicket = 15
    } else if (type === 'Regular' && day === 'Saturday') {
        priceOfTicket = 20
    } else if (type === 'Regular' && day === 'Sunday') {
        priceOfTicket = 22.50
    }

    finalSum = priceOfTicket * count

    if (type === 'Students' && count >= 30) {
        finalSum *= 0.85
    } else if (type === 'Business' && count >= 100) {
        finalSum -= 10 * priceOfTicket
    } else if (type === 'Regular' && count >= 10 && count <= 20) {
        finalSum *= 0.95
    }

    console.log(`Total price: ${finalSum.toFixed(2)}`)
}

NSS(30,
    "Students",
    "Sunday"
)

NSS(40,
    "Regular",
    "Saturday"
)