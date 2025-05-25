import { Schema, model } from "mongoose"
import { languages } from "../utils/languages"


const filmSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: { type: String, required: true },
  duration: { type: Number, required: true },
  language: { type: String, enum: languages }
}, {
  versionKey: false
})

const Film = model("Film", filmSchema)

export { Film }