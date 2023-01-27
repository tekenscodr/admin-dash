const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    try {
        return res.status(200).send('HOME!!!')
    } catch (error) {
        
    }
})

router.get('/dash', (req, res, next) => {
    try {
        return res.status(200).send('DASH!!!')
    } catch (error) {
        
    }
})
router.get('/agent', (req, res, next) => {
    try {
        return res.status(200).send('AGENT!!!')
    } catch (error) {
        
    }
})
router.get('/customer', (req, res, next) => {
    try {
        return res.status(200).send('CUSTOMER!!!')
    } catch (error) {
        
    }
})
router.get('/login', (req, res, next) => {
    try {
        return res.status(200).send('LOGIN!!!')
    } catch (error) {
        
    }
})
router.get('/register', (req, res, next) => {
    try {
        return res.status(200).send('REGISTER!!!')
    } catch (error) {
        
    }
})