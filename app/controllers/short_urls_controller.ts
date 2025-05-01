// import type { HttpContext } from '@adonisjs/core/http'

import QRCode from 'qrcode'
import ShortUrl from '#models/short_url'

export default class ShortUrlsController {
  public async index({ view }) {
    
    const lists = await ShortUrl.all()
    return view.render('pages/hero', {lists})
  }


public async listurls({ view }) {
  const lists = await ShortUrl.all()

  return view.render('pages/hero', {lists})
}
  public async create({ request, view, response }) {
 
    const originalUrl = request.input('url')
    console.log(originalUrl);

    const shortCode = Math.floor(Math.random() * 6000)
    console.log(shortCode);

    const link = request.completeUrl(true)
    // console.log(link);
    
    const url = await ShortUrl.create({
      code: shortCode,
      short_url: link,
      original_url: originalUrl
    })
    // console.log(url);
    

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


  public  async submit({view}) {

    return view.render(`pages/home`)
    
  }
}


