// MOCK DB

var db = [
  {
    // https://testnets.opensea.io/collection/comic-walking-dead
    album_id: 1,
    title: 'The Walking Dead',
    description: 'The world we knew is gone.',
    image: null,
    gap: 'gap-0',
    type: 'comic',
    address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
    width: 1280,
    height: 1968,
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
                  columns: 12,
                  rows: 3,
                  width: 512,
                  height: 220,
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
                  columns: 6,
                  rows: 3,
                  height: 358,
                  width: 512
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858130722209660929',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 6,
                  rows: 3,
                  height: 358,
                  width: 512
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
                  columns: 6,
                  rows: 3,
                  height: 354,
                  width: 512
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858132921232916481',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 6,
                  rows: 3,
                  height: 354,
                  width: 512
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
                  columns: 12,
                  rows: 3,
                  height: 220,
                  width: 512
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
                token_id: '105665526449733265606596008423351073540659047519780003086054858135120256172033',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 12,
                  rows: 12,
                  height: 1968,
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
                  columns: 4,
                  rows: 2,
                  height: 670,
                  width: 440,
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858137319279427585',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 4,
                  rows: 2,
                  height: 670,
                  width: 440,
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858138418791055361',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 4,
                  rows: 2,
                  height: 670,
                  width: 440,
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
                  columns: 4,
                  rows: 2,
                  height: 585,
                  width: 386,
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858140617814310913',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 4,
                  rows: 2,
                  height: 585,
                  width: 386,
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858141717325938689',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 4,
                  rows: 2,
                  height: 585,
                  width: 386,
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
                  columns: 4,
                  rows: 2,
                  height: 713,
                  width: 440,
                },
                isNFT: false,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858143916349194241',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 4,
                  rows: 2,
                  height: 713,
                  width: 440,
                },
                isNFT: true,
                resource: null,
                type: 'image'
              },
              {
                token_id: '105665526449733265606596008423351073540659047519780003086054858145015860822017',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 4,
                  rows: 2,
                  height: 713,
                  width: 440,
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
                token_id: '105665526449733265606596008423351073540659047519780003086054858135120256172033',
                address: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
                size: {
                  columns: 12,
                  rows: 12,
                  height: 1968,
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
];

export default db;
