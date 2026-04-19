require('dotenv').config();
module.exports = {
    botName:            'Scotty_C',
    botOwner:           'Scotty',
    ownerNumber:        process.env.OWNER_NUMBER || '263788114185',
    prefix:             '.',
    packname:           'Scotty_C',
    author:             '© Scotty',
    version:            '3.0.0',
    commandMode:        'public',
    storeWriteInterval: 10000,
    warnLimit:          3,
};
