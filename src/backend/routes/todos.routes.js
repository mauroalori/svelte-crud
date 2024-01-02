import { Router } from 'express'
import { getListas } from '../controllers/todos.controller.js'

const router = Router()

router.get('/', (_req, res) => {
  res.send('API Listas')
})

router.get('/listas', getListas)

// router.get('/colegios/:id', getColegio)

// router.post('/colegios', fileUpload({ useTempFiles : true, tempFileDir : './uploads' }), createColegio)

// router.put('/colegios/:id', updateColegio)

// router.delete('/colegios/:id', deleteColegio)

export default router