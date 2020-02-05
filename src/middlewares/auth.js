module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: "no Token Provided."});

    const parts = authHeader.split(' ');
    
    if(!parts.lenght === 2)
        return res.status(401).send({ error: "Token Error"});

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: "Token Malformed."})
}