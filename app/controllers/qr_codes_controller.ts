import type { HttpContext } from '@adonisjs/core/http'

// export default class QrCodesController {
//   public async generate({ params }) {
//     // À implémenter
//   }
// }


import QRCode from 'qrcode'

const urlMap = new Map<string, string>() // shared memory map (could be moved globally)

export default class QrCodesController {
  public async generate({ params, response }) {
    const original = urlMap.get(params.code)

    if (!original) {
      return response.status(404).send('QR non disponible')
    }

    const qrBuffer = await QRCode.toBuffer(original)

    response.type('image/png')
    return response.send(qrBuffer)
  }
}

export default class QrCodesController {
  public async generate({ params, response }) {
    // À implémenter
    // const original = urlMap.get(params.code)

    // if (!original) {
    //   return response.status(404).send('QR non disponible')
    // }

    // const qrBuffer = await QRCode.toBuffer(original)

    // response.type('image/png')
    // return response.send(qrBuffer)
  }
}
