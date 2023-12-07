import { Movie, User, Rating, db } from './model.js'

const handlerFunctions = {

    getMovies: async (req, res) => {
        const allMovies = await Movie.findAll()
        res.send(allMovies)
    },

    oneMovie: async (req, res) => {
        const {movieId} = req.params
        const movie = await Movie.findByPk(movieId)

        res.send(movie)
    },

    login: async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({
            where: { email: email}
        })
        if (user && user.password === password){
            req.session.userId = user.userId
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    }
}

export default handlerFunctions