// import type { HttpContext } from '@adonisjs/core/http'

// import { nanoid } from 'nanoid'

// export const urlMap = new Map<string, string>()
import QRCode from 'qrcode'
export default class ShortUrlsController {
  public async index({ view }) {
    return view.render('pages/hero')
  }

  public async create({ request, view, response }) {
    // const originalUrl = request.input('url')

    // const code = nanoid(6)
    // urlMap.set(code, originalUrl)

    // return view.render('pages/result', {
    //   shortUrl: `${request.protocol()}://${request.host()}/${code}`,
    //   code,
    // })

    const originalUrl = request.input('url')
    console.log(originalUrl);

    const shortCode = Math.floor(Math.random() * 6000)
    console.log(shortCode);

    const link = request.completeUrl(true)
    // console.log(link);
    

    const shortlink = link + shortCode
    // console.log(shortlink);
    

    const codeqr = await QRCode.toDataURL(shortlink)
    // console.log(codeqr);

    return view.render('pages/result', {url: shortlink, qrcode: codeqr})
    
  }

  // public async redirect({ params, response }) {
  //   // const original = urlMap.get(params.code)
  //   // return response.redirect(original)
  // }
}


