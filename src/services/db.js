// MOCK DB

var db = [
  {
    // https://testnets.opensea.io/collection/comic-walking-dead
    album_id: "comic",
    network: "rinkeby",
    title: 'The Walking Dead',
    description: 'The world we knew is gone.',
    backgroundVideo: 'default',
    backgroundSound: 'default',
    image: null,
    gap: 'gap-0',
    type: 'comic',
    address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
    width: 1280,
    height: 1990,
    sizeMultiplier: .4,
    cover: {
      image: '../../img/comics/cover-the-walking-dead.jpg',
    },
    back: {
      image: '../../img/comics/back-the-walking-dead.png',
    },
    pages: [
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858128523186405377',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 550
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858129622698033153',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 447.5,
                  width: 640
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858130722209660929',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 447.5,
                  width: 640
                },
                isNFT: false,
                resource: null,
                type: 'image'
              }
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858131821721288705',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 442.5,
                  width: 640
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858132921232916481',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 442.5,
                  width: 640
                },
                isNFT: true,
                resource: null,
                type: 'image'
              }
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858134020744544257',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 550
                },
                isNFT: true,
                resource: null,
                type: 'image'
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858182399256166410',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 12,
                  rows: 12,
                  height: 1990,
                  width: 1280
                },
                isNFT: true,
                resource: null,
                type: 'image'
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858136219767799809',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 670,
                  width: 440
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858137319279427585',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 670,
                  width: 440
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858138418791055361',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 670,
                  width: 440
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858139518302683137',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 670,
                  width: 440
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858140617814310913',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 670,
                  width: 440
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858141717325938689',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 670,
                  width: 440
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858142816837566465',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 713,
                  width: 440
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858143916349194241',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 713,
                  width: 440
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858145015860822017',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 713,
                  width: 440
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858182399256166410',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  height: 1990,
                  width: 1280
                },
                isNFT: true,
                resource: null,
                type: 'image'
              }
            ]
          ]
        }
      },
    ]
  },
  {
    // https://testnets.opensea.io/collection/comic-walking-dead
    album_id: "sticker-album",
    network: "rinkeby",
    title: 'Bizarrap Sticker Album',
    description: 'Biza biza rap',
    backgroundVideo: 'default',
    backgroundSound: 'default',
    image: null,
    gap: 'gap-0',
    type: 'album',
    address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
    width: 2060,
    height: 2800,
    sizeMultiplier: .3,
    cover: {
      image: '../../img/comics/bizarrap_cover.png',
    },
    back: {
      image: '../../img/comics/bizarrap_back.png',
    },
    pages: [
      {
        type: 'content',
        backgroundImage: '../../img/comics/bizarrap_album_bg2.png',
        assets: {
          columns: [
            [
              {
                size: {
                  width: 2060,
                  height: 1003,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 731,
                  height: 793,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 599,
                  height: 793
                },
                isNFT: false,
                resource: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/e/f/0/9/ef092cb92734d5ca5b5f936115d8a277.jpg',
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg_2.png'
              },
              {
                size: {
                  width: 731,
                  height: 793,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 1003,
                },
                type: 'empty',
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/bizarrap_album_bg1.png',
        assets: {
          columns: [
            [
              {
                size: {
                  width: 2060,
                  height: 385.8,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 222.83,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 366.82,
                  height: 222.83
                },
                isNFT: false,
                resource: '../../img/comics/biza-arg-flag.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 1627.43,
                  height: 222.83
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 59.87,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 161.4
                },
                type: 'empty',
              },
              {
                size: {
                  width: 1142.36,
                  height: 161.4
                },
                isNFT: false,
                resource: '../../img/comics/biza-arg-text.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 851.89,
                  height: 161.4
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 224.39,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: false,
                resource: 'https://elrescatemusical.com/wp-content/uploads/2020/12/unnamed-1.jpg',
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938790108052586596',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938791207564214372',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 72.74,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938792307075842148',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938794506099097700',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938797804633981028',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 222.03,
                },
                type: 'empty',
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/bizarrap_album_bg1.png',
        assets: {
          columns: [
            [
              {
                size: {
                  width: 2060,
                  height: 385.8,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 222.83,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 366.82,
                  height: 222.83
                },
                isNFT: false,
                resource: '../../img/comics/biza-col-flag.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 1627.43,
                  height: 222.83
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 59.87,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 161.4
                },
                type: 'empty',
              },
              {
                size: {
                  width: 1050.73,
                  height: 161.4
                },
                isNFT: false,
                resource: '../../img/comics/biza-col-text.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 843.52,
                  height: 161.4
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 224.39,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: false,
                resource: 'https://i.scdn.co/image/ab67616d00001e02e26045ed24b1c5c1510fb710',
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938803302192119908',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938793406587469924',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 72.74,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938795605610725476',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938796705122353252',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938798904145608804',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 222.03,
                },
                type: 'empty',
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/bizarrap_album_bg1.png',
        assets: {
          columns: [
            [
              {
                size: {
                  width: 2060,
                  height: 385.8,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 222.83,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 366.82,
                  height: 222.83
                },
                isNFT: false,
                resource: '../../img/comics/biza-mex-flag.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 1627.43,
                  height: 222.83
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 59.87,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 161.4
                },
                type: 'empty',
              },
              {
                size: {
                  width: 788.79,
                  height: 161.4
                },
                isNFT: false,
                resource: '../../img/comics/biza-mex-text.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 1205.46,
                  height: 161.4
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 224.39,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: false,
                resource: 'https://i.pinimg.com/originals/9e/c1/22/9ec122ee7d348f9d2afaa3e41004009f.jpg',
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938800003657236580',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938801103168864356',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 72.74,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938802202680492132',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938812098285142116',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938804401703747684',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 222.03,
                },
                type: 'empty',
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/bizarrap_album_bg1.png',
        assets: {
          columns: [
            [
              {
                size: {
                  width: 2060,
                  height: 385.8,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 222.83,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 366.82,
                  height: 222.83
                },
                isNFT: false,
                resource: '../../img/comics/biza-puerto-flag.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 1627.43,
                  height: 222.83
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 59.87,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 161.4
                },
                type: 'empty',
              },
              {
                size: {
                  width: 1329.77,
                  height: 161.4
                },
                isNFT: false,
                resource: '../../img/comics/biza-puerto-text.png',
                type: 'image',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 664.48,
                  height: 161.4
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 224.39,
                },
                type: 'empty',
              },
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: false,
                resource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaofKA6hF6fxOVGMn9PaSQA2RHWgOWHlOXeg&usqp=CAU',
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938805501215375460',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938806600727003236',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 72.74,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938807700238631012',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938808799750258788',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 107.24,
                  height: 725.47,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938809899261886564',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 571.03,
                  height: 725.47
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg.png'
              },
              {
                size: {
                  width: 65.75,
                  height: 725.47,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 222.03,
                },
                type: 'empty',
              }
            ]
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/bizarrap_album_bg2.png',
        assets: {
          columns: [
            [
              {
                size: {
                  width: 2060,
                  height: 1003,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 731,
                  height: 793,
                },
                type: 'empty',
              },
              {
                token_id: '77842844927296955879895027605407541634262156154429109638008938810998773514340',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 599,
                  height: 793
                },
                isNFT: true,
                resource: null,
                type: 'sticker',
                padding: null,
                rounded: false,
                borderColor: null,
                backgroundImage: '../../img/comics/biza_sticker_bg_2.png'
              },
              {
                size: {
                  width: 731,
                  height: 793,
                },
                type: 'empty',
              }
            ],
            [
              {
                size: {
                  width: 2060,
                  height: 1003,
                },
                type: 'empty',
              }
            ]
          ]
        }
      }
    ]
  },
  {
    // https://testnets.opensea.io/collection/gorrillaz-album-test
    album_id: "musical-booklet",
    network: "rinkeby",
    title: 'Gorillaz',
    description: '',
    backgroundVideo: 'default',
    backgroundSound: 'default',
    image: null,
    gap: 'gap-0',
    type: 'audio',
    address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
    width: 1280,
    height: 1280,
    sizeMultiplier: .4,
    cover: {
      image: '../../img/audio/cover-gorillaz.jpg',
    },
    back: {
      image: '../../img/audio/back-gorillaz.jpg',
    },
    pages: [
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '01 Re-Hash (Feat. Miho Hatori)',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: '01 Re-Hash (Feat. Miho Hatori)',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858147214884077569',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '02 5-4 (Feat. Miho Hatori)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858147214884077569',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '02 5-4 (Feat. Miho Hatori)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858148314395705345',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '03 Tomorrow Comes Today',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858148314395705345',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '03 Tomorrow Comes Today',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858149413907333121',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '04 New Genius (Brother)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858149413907333121',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '04 New Genius (Brother)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858150513418960897',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '05 Clint Eastwood',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858150513418960897',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '05 Clint Eastwood',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858151612930588673',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '06 Man Research (Clapper)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858151612930588673',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '06 Man Research (Clapper)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858153811953844225',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '07 Punk (Feat. Dave Rowntree)',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858153811953844225',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '07 Punk (Feat. Dave Rowntree)',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858154911465472001',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '08 Sound Check (Gravity)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858154911465472001',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '08 Sound Check (Gravity)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858157110488727553',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '09 Double Bass',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858157110488727553',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '09 Double Bass',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858158210000355329',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '10 Rock The House (Feat. Del Tha Funky)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858158210000355329',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '10 Rock The House (Feat. Del Tha Funky)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '11 19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '11 19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858160409023610881',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                coverSize: 'lg',
                title: '12 Latin Simone (??Qu?? Pasa Contigo_)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858160409023610881',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 640,
                  height: 640,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '12 Latin Simone (??Qu?? Pasa Contigo_)',
                artist: 'Gorillaz',
                color: "#00aeb0",
              },
            ],
          ]
        }
      }
    ]
  },
  {
    // https://testnets.opensea.io/collection/gorrillaz-album-test
    album_id: "musical-booklet-vol-2",
    network: "rinkeby",
    title: 'Gorillaz Vol 2',
    description: 'The future is coming on ????',
    backgroundVideo: 'default',
    backgroundSound: 'default',
    image: null,
    gap: 'gap-0',
    type: 'audio',
    address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
    width: 1280,
    height: 1280,
    sizeMultiplier: .4,
    cover: {
      image: '../../img/audio/cover-gorillaz.jpg',
    },
    back: {
      image: '../../img/audio/back-gorillaz.jpg',
    },
    pages: [
      {
        type: 'content',
        backgroundImage: '../../img/comics/gorillaz-album-bg-3.png',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 365,
                },
                isNFT: false,
                resource: null,
                padding: '0',
                rounded: false,
                type: 'empty',
                artist: 'Gorillaz',
                title: 'Re-Hash (Feat. Miho Hatori)',
                backgroundType: 'overlay',
                coverSize: 'xs'
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 365,
                  height: 550,
                },
                isNFT: false,
                resource: null,
                padding: '0',
                rounded: false,
                type: 'empty',
                artist: 'Gorillaz',
                title: 'Re-Hash (Feat. Miho Hatori)',
                backgroundType: 'overlay',
                coverSize: 'lg'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 550,
                  height: 550,
                },
                isNFT: false,
                resource: null,
                padding: '0',
                rounded: false,
                type: 'audio',
                artist: 'Gorillaz',
                title: 'Re-Hash (Feat. Miho Hatori)',
                backgroundType: 'overlay',
                coverSize: 'md'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 365,
                  height: 550,
                },
                isNFT: false,
                resource: null,
                padding: '0',
                rounded: false,
                type: 'empty',
                artist: 'Gorillaz',
                title: 'Re-Hash (Feat. Miho Hatori)',
                backgroundType: 'overlay',
                coverSize: 'lg'
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858146115372449793',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 365,
                },
                isNFT: false,
                resource: null,
                padding: '0',
                rounded: false,
                type: 'empty',
                artist: 'Gorillaz',
                title: 'Re-Hash (Feat. Miho Hatori)',
                backgroundType: 'overlay',
                coverSize: 'lg'
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858147214884077569',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 402,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: '5-4 (Feat. Miho Hatori)',
                artist: 'Gorillaz',
                color: "#ffb77a",
                coverSize: 'sm',
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858167006093377546',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 878,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                artist: 'Gorillaz',
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/gorillaz-album-bg-1.png',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858153811953844225',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 1280,
                },
                isNFT: false,
                resource: null,
                padding: 48,
                rounded: false,
                type: 'empty',
                backgroundType: 'overlay',
                title: '07 Punk (Feat. Dave Rowntree)',
                artist: 'Gorillaz',
                color: "#ffb77a",
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        backgroundImage: '../../img/comics/gorillaz-album-bg-2.png',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 200,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'empty',
                title: '19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
                backgroundType: 'backdrop',
                coverSize: 'md',
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 77,
                  height: 440,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'empty',
                title: '19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
                backgroundType: 'backdrop',
                coverSize: 'md',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 440,
                  height: 440,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: '19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
                backgroundType: 'backdrop',
                coverSize: 'md',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 763,
                  height: 440,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'empty',
                title: '19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 640,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'empty',
                title: '19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "#5f9fff",
                backgroundType: 'overlay',
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858172503651516426',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 1280,
                  height: 1280,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '',
                artist: '',
                color: '',
                backgroundType: 'backdrop',
                coverSize: 'lg',
              },
            ],
          ]
        }
      },
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858173603163144202',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 473,
                  height: 320,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-1',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858174702674771978',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 458,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-2',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858158210000355329',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 349,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: 'Rock The House (Feat. Del Tha Funky)',
                artist: 'Gorillaz',
                color: "",
                backgroundType: 'backdrop',
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858175802186399754',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 473,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-3',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858176901698027530',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 458,
                  height: 320,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-4',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858159309511983105',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 349,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: '19-2000 (Feat. Miho Hatori _ Tina Weymouth)',
                artist: 'Gorillaz',
                color: "",
                backgroundType: 'backdrop',
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858178001209655306',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 473,
                  height: 320,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-5',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858179100721283082',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 458,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-6',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858160409023610881',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 349,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: 'Latin Simone (??Qu?? Pasa Contigo_)',
                artist: 'Gorillaz',
                color: "",
                backgroundType: 'backdrop',
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858180200232910858',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 473,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-7',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858179100721283082',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 458,
                  height: 320,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: '8-6',
                artist: '',
                color: "",
                backgroundType: '',
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858150513418960897',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 349,
                  height: 320,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'audio',
                title: '05 Clint Eastwood',
                artist: 'Gorillaz',
                color: "",
                backgroundType: 'backdrop',
                coverSize: 'md'
              },
            ],
          ]
        }
      },
    ]
  },
  {
    // https://testnets.opensea.io/collection/iota-mural-poc
    album_id: "iota-mural",
    network: "rinkeby",
    title: 'IOTA Mural',
    description: 'An Open, Feeless Data and Value Transfer Protocol',
    backgroundVideo: 'default',
    backgroundSound: 'default',
    image: null,
    gap: 'gap-0',
    type: 'mural',
    address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
    width: 3840,
    height: 2160,
    sizeMultiplier: .4,
    cover: null,
    back: null,
    pages: [
      {
        type: 'content',
        assets: {
          columns: [
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858183498767794186',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 1',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858184598279421962',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 2',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858185697791049738',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 3',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858186797302677514',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 4',
                artist: null,
                color: null,
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858187896814305290',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 5',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858188996325933066',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 6',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858190095837560842',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 7',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858191195349188618',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 8',
                artist: null,
                color: null,
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858192294860816394',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 9',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858193394372444170',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 10',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858194493884071946',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 11',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858195593395699722',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 12',
                artist: null,
                color: null,
              },
            ],
            [
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858196692907327498',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 13',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858197792418955274',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 14',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858198891930583050',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: true,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 15',
                artist: null,
                color: null,
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858199991442210826',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  width: 960,
                  height: 540,
                },
                isNFT: false,
                resource: null,
                padding: null,
                rounded: false,
                type: 'image',
                title: 'IOTA Mural POC 16',
                artist: null,
                color: null,
              },
            ],
          ]
        }
      },
    ]
  },
];

export default db;
