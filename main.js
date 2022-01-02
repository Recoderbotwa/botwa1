const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./nana.js')
nocache('./nana.js', module => console.log(`${module} Telah Di Update✓`))

const starts = async (LexxyOFC = new WAConnection()) => {
    LexxyOFC.logger.level = 'warn'
    LexxyOFC.version = [2, 2143, 8]
    LexxyOFC.browserDescription = ["Lexxy Official", "safari", "windows 10"];
    console.log(banner.string)
    LexxyOFC.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && LexxyOFC.loadAuthInfo('./session.json')
    LexxyOFC.on('connecting', () => {
        start('2', 'Connecting...')
    })
    LexxyOFC.on('open', () => {
        success('2', 'Connected')
    })
    await LexxyOFC.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(LexxyOFC.base64EncodedAuthInfo(), null, '\t'))

    LexxyOFC.on('chat-update', async (message) => {
        require('./nana.js')(LexxyOFC, message)
    })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('[ ! ]', `'${module}'`, 'Di Pantau Oleh Fardi')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })

}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
