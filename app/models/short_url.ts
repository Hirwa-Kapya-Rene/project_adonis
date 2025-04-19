import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ShortUrl extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: number

  @column()
  declare short_url: string

  @column()
  declare original_url: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}