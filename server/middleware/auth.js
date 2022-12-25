import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    try {
       let token = req.headers('Authorization')
        if (!token){
            return res.status(403).send('Access Denied')
        }
        if (token.startWith('Bearer')){
            token = token.slice(' ')[1]
        }
        const verified = jwt.verify(token, process.env.JWT)
        req.user = verified
        next()
    }catch (e) {
        res.status(500).json({ error: e.message })
    }
}
