import type { HttpContext } from '@adonisjs/core/http'

import { nanoid } from 'nanoid'
// const urlMap = new Map<string, string>()

// export default class ShortUrlsController {
//   // Affiche la page d'accueil avec le formulaire
//   public async index({ view }) {
//     return view.render('pages/home')
//   }

//   // Création d'une URL courte
//   public async create({ request, response }) {
//     // À implémenter
//   }

//   // Redirection vers l'URL originale
//   public async redirect({ params, response }) {
//     // À implémenter
//   }
// }



const urlMap = new Map<string, string>()

export default class ShortUrlsController {
  public async index({ view }) {
    return view.render('pages/home')
  }

  public async create({ request, view, response }) {
    const originalUrl = request.input('url')

    try {
      new URL(originalUrl)
    } catch {
      return view.render('pages/home', {
        error: 'URL invalide',
      })
    }

    const code = nanoid(6)
    urlMap.set(code, originalUrl)

    return view.render('pages/result', {
      shortUrl: `${request.protocol()}://${request.host()}/${code}`,
      code,
    })
  }

  public async redirect({ params, response }) {
    const original = urlMap.get(params.code)
    if (!original) {
      return response.status(404).send('Lien non trouvé')
    }

    return response.redirect(original)
  }
}
