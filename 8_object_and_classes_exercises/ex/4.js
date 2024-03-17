function NSS(array) {
        let finalMovies = [];

        for (let i of array) {
                if (i.includes('addMovie')) {
                        let movie = {
                                name: i.substring(9)
                        }
                        finalMovies.push(movie)
                } else if (i.includes('directedBy')) {
                        let [name, director] = i.split(' directedBy ')
                        let movie = finalMovies.find(movie => movie.name === name)

                        if (movie) {movie.director = director}

                } else if (i.includes('onDate')) {
                        let [name, date] = i.split(' onDate ')
                        let movie = finalMovies.find(movie => movie.name === name)

                        if (movie) {movie.date = date}
                }
        }

        finalMovies.filter(movie => movie.director && movie.date).forEach(movie => console.log(JSON.stringify(movie)))
        // console.log(finalMovies) -> for debugging purposes
}

NSS([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)

NSS([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]
)