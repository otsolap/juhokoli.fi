export default function handler(req, res) {
    const body = req.body
    console.log('body: ', body)

    if (!body.fullName || !body.tel) {
        return res.status(400).json({ data: 'First or tel not found' })
    }

    res.status(200).json({ data: `${body.fullName} ${body.tel}` })
}