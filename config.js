module.exports = {
    TOKEN: 'ODk4NDQwMDY5NjUwNzMxMDUx.GaEFFJ.2_DVUtVDc1EtWJ4kaCadDrni3nYtEU5EVpVbKI',
    ownerID: ['1004206704994566164', ''],
    botInvite: '',
    supportServer: '',
    mongodbURL:
        'mongodb+srv://lampng:vhoOvRTkwH8oWxst@nodejs-server.omzznkp.mongodb.net/BestBot?retryWrites=true&w=majority',
    status: '𝓹𝓱𝓵𝓪𝓶 Music',
    commandsDir: './commands',
    language: 'en',
    embedColor: '00fbff',
    errorLog: '',

    sponsor: {
        status: true,
        url: 'https://www.facebook.com/PNGLammm',
    },

    voteManager: {
        status: false,
        api_key: '',
        vote_commands: [
            'back',
            'channel',
            'clear',
            'dj',
            'filter',
            'loop',
            'nowplaying',
            'pause',
            'play',
            'playlist',
            'queue',
            'resume',
            'save',
            'search',
            'skip',
            'stop',
            'time',
            'volume',
        ],
        vote_url: '',
    },

    shardManager: {
        shardStatus: false,
    },

    playlistSettings: {
        maxPlaylist: 10,
        maxMusic: 75,
    },

    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'],
        },

        voiceConfig: {
            leaveOnFinish: false,
            leaveOnStop: false,
            leaveOnEmpty: {
                status: true,
                cooldown: 10000000,
            },
        },

        maxVol: 150,
    },
};
