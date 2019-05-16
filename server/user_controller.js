

module.exports = {
    getAllUsers: (req, res) => {
        const db = req.app.get('db')
        db.get_users().then((users) => {
            console.log(users)
            res.status(200).send(users)
        })
    },

    getUserById: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_user_by_id(id).then((user) => { //user can be anything name
            res.status(200).send(user)
        })
    },

    addUser: (req, res) => {
        const db = req.app.get('db')
        const {first_name, last_name} = req.body
        db.add_user({first_name, last_name}).then(() => {
            res.status(200).send("user added")
        })
    }
}