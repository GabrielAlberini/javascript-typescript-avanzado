import { Request, Response } from "express"
import { Film } from "../models/FilmModel"
import { IFilm } from "../interfaces/IFilm"


class FilmController {
  static async getAllFilms(req: Request, res: Response): Promise<any> {
    try {
      const films = await Film.find()
      return res.json({
        success: true,
        data: films
      })
    } catch (error) {
      const err = error as Error
      return res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }

  static async getFilm(req: Request, res: Response): Promise<any> {
    const id = req.params.id
    try {
      const foundFilm = await Film.findById(id)
      if (!foundFilm) return res.status(404).json({ success: false, message: "film not found" })
      return res.json({ success: true, data: foundFilm })
    } catch (error) {
      const err = error as Error
      return res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }

  static async createNewFilm(req: Request, res: Response): Promise<any> {
    try {
      const body = req.body
      const { title, director, duration, language }: IFilm = body

      if (!title || !director || !duration || !language) {
        return res.status(400).json({
          success: false,
          message: "bad request"
        })
      }

      const newFilm = new Film({ title, director, duration, language })
      await newFilm.save()
      return res.status(201).json({ success: true, data: newFilm })
    } catch (error) {
      const err = error as Error
      return res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }

  static async updateFilm(req: Request, res: Response): Promise<any> {
    const id = req.params.id
    const body = req.body
    try {
      const updatedFilm = await Film.findByIdAndUpdate(id, body, { new: true })
      if (!updatedFilm) return res.status(404).json({ success: false, message: "film not found" })
      return res.json({ success: true, data: updatedFilm })
    } catch (error) {
      const err = error as Error
      return res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }

  static async deleteFilm(req: Request, res: Response): Promise<any> {
    const id = req.params.id
    try {
      const deletedFilm = await Film.findByIdAndDelete(id)
      if (!deletedFilm) return res.status(404).json({ success: false, message: "film not found" })
      return res.json({ success: true, data: deletedFilm })
    } catch (error) {
      const err = error as Error
      return res.status(500).json({
        success: false,
        message: err.message
      })
    }
  }
}

export default FilmController
