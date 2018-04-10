import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    albums: [{
        slike: [{
            picQuality: 'Nights/01.jpg',
            picLowQuality: 'Nights/01.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Nights/02.jpg',
            picLowQuality: 'Nights/02.webp',
            size: 'vert'
          },
          {
            picQuality: 'Nights/03.jpg',
            picLowQuality: 'Nights/03.webp',
            size: 'vert'
          },
          {
            picQuality: 'Nights/04.jpg',
            picLowQuality: 'Nights/04.webp',
            size: 'lg12'
          }
        ],
        thumbnailQ: 'Nights/Thumb.jpg',
        thumbnailLowQ: 'Nights/thumb.webp',
        text: 'Pic Title',
        id: 'Nights',
      },
      {
        slike: [{
            picQuality: 'Niksi/01.jpg',
            picLowQuality: 'Niksi/01.webp',
          },
          {
            picQuality: 'Niksi/02.jpg',
            picLowQuality: 'Niksi/02.webp',
          },
          {
            picQuality: 'Niksi/03.jpg',
            picLowQuality: 'Niksi/03.webp',
          },
          {
            picQuality: 'Niksi/04.jpg',
            picLowQuality: 'Niksi/04.webp',
          },
          {
            picQuality: 'Niksi/05.jpg',
            picLowQuality: 'Niksi/05.webp',
          },
          {
            picQuality: 'Niksi/06.jpg',
            picLowQuality: 'Niksi/06.webp',
          },
          {
            picQuality: 'Niksi/07.jpg',
            picLowQuality: 'Niksi/07.webp',
          },
          {
            picQuality: 'Niksi/08.jpg',
            picLowQuality: 'Niksi/08.webp',
          },
          {
            picQuality: 'Niksi/09.jpg',
            picLowQuality: 'Niksi/09.webp',
          },
          {
            picQuality: 'Niksi/10.jpg',
            picLowQuality: 'Niksi/10.webp',
          },
          {
            picQuality: 'Niksi/11.jpg',
            picLowQuality: 'Niksi/11.webp',
          },
          {
            picQuality: 'Niksi/12.jpg',
            picLowQuality: 'Niksi/12.webp',
          },
          {
            picQuality: 'Niksi/13.jpg',
            picLowQuality: 'Niksi/13.webp',
          },
          {
            picQuality: 'Niksi/14.jpg',
            picLowQuality: 'Niksi/14.webp',
          },
          {
            picQuality: 'Niksi/15.jpg',
            picLowQuality: 'Niksi/15.webp',
          },
          {
            picQuality: 'Niksi/16.jpg',
            picLowQuality: 'Niksi/16.webp',
          }
        ],
        thumbnailQ: 'Niksi/Thumb.jpg',
        thumbnailLowQ: 'Niksi/Thumb.jpg',
        text: 'Pic Title',
        id: 'Niksi',
      },
      {
        slike: [{
            picQuality: 'Places/01.jpg',
            picLowQuality: 'Places/01.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/02.jpg',
            picLowQuality: 'Places/02.webp',
            size: 'vert'
          },
          {
            picQuality: 'Places/03.jpg',
            picLowQuality: 'Places/03.webp',
            size: 'vert'
          },
          {
            picQuality: 'Places/04.jpg',
            picLowQuality: 'Places/04.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/05.jpg',
            picLowQuality: 'Places/05.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/06.jpg',
            picLowQuality: 'Places/06.webp',
            size: 'vert'
          },
          {
            picQuality: 'Places/07.jpg',
            picLowQuality: 'Places/07.webp',
            size: 'vert'
          },
          {
            picQuality: 'Places/08.jpg',
            picLowQuality: 'Places/08.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/09.jpg',
            picLowQuality: 'Places/09.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/10.jpg',
            picLowQuality: 'Places/10.webp',
            size: 'vert'
          },
          {
            picQuality: 'Places/11.jpg',
            picLowQuality: 'Places/11.webp',
            size: 'vert'
          },
          {
            picQuality: 'Places/12.jpg',
            picLowQuality: 'Places/12.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/13.jpg',
            picLowQuality: 'Places/13.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/14.jpg',
            picLowQuality: 'Places/14.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/15.jpg',
            picLowQuality: 'Places/15.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/16.jpg',
            picLowQuality: 'Places/16.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Places/17.jpg',
            picLowQuality: 'Places/17.webp',
            size: 'lg12'
          }
        ],
        thumbnailQ: 'Places/Thumb.jpg',
        thumbnailLowQ: 'Places/thumb.webp',
        text: 'Pic Title',
        id: 'Places',
      }, {
        slike: [{
            picQuality: 'Us/01.jpg',
            picLowQuality: 'Us/01.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/02.jpg',
            picLowQuality: 'Us/02.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/03.jpg',
            picLowQuality: 'Us/03.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/04.jpg',
            picLowQuality: 'Us/04.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/05.jpg',
            picLowQuality: 'Us/05.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/06.jpg',
            picLowQuality: 'Us/06.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/07.jpg',
            picLowQuality: 'Us/07.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/08.jpg',
            picLowQuality: 'Us/08.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/09.jpg',
            picLowQuality: 'Us/09.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/10.jpg',
            picLowQuality: 'Us/10.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/11.jpg',
            picLowQuality: 'Us/11.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/12.jpg',
            picLowQuality: 'Us/12.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/13.jpg',
            picLowQuality: 'Us/13.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/14.jpg',
            picLowQuality: 'Us/14.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/15.jpg',
            picLowQuality: 'Us/15.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/16.jpg',
            picLowQuality: 'Us/16.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/17.jpg',
            picLowQuality: 'Us/17.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/18.jpg',
            picLowQuality: 'Us/18.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/19.jpg',
            picLowQuality: 'Us/19.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/20.jpg',
            picLowQuality: 'Us/20.webp',
            size: 'vert'
          },
          {
            picQuality: 'Us/21.jpg',
            picLowQuality: 'Us/21.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/22.jpg',
            picLowQuality: 'Us/22.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/23.jpg',
            picLowQuality: 'Us/23.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/24.jpg',
            picLowQuality: 'Us/24.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/25.jpg',
            picLowQuality: 'Us/25.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Us/26.jpg',
            picLowQuality: 'Us/26.webp',
            size: 'lg12'
          }
        ],
        thumbnailQ: 'Us/Thumb.jpg',
        thumbnailLowQ: 'Us/Thumb.jpg',
        text: 'Pic Title',
        id: 'Us',
      },
      {
        slike: [{
            picQuality: 'Trokanac/01.jpg',
            picLowQuality: 'Trokanac/1.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/02.jpg',
            picLowQuality: 'Trokanac/02.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/03.jpg',
            picLowQuality: 'Trokanac/03.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/04.jpg',
            picLowQuality: 'Trokanac/04.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/05.jpg',
            picLowQuality: 'Trokanac/05.webp',
            size: 'vert'
          },
          {
            picQuality: 'Trokanac/06.jpg',
            picLowQuality: 'Trokanac/06.webp',
            size: 'vert'
          },
          {
            picQuality: 'Trokanac/07.jpg',
            picLowQuality: 'Trokanac/07.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/08.jpg',
            picLowQuality: 'Trokanac/08.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/09.jpg',
            picLowQuality: 'Trokanac/09.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/10.jpg',
            picLowQuality: 'Trokanac/10.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/11.jpg',
            picLowQuality: 'Trokanac/11.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/12.jpg',
            picLowQuality: 'Trokanac/12.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/13.jpg',
            picLowQuality: 'Trokanac/13.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/14.jpg',
            picLowQuality: 'Trokanac/14.webp',
            size: 'lg12'
          },
          {
            picQuality: 'Trokanac/15.jpg',
            picLowQuality: 'Trokanac/15.webp',
            size: 'lg12'
          }
        ],
        thumbnailQ: 'Trokanac/Thumb.jpg',
        thumbnailLowQ: 'Trokanac/Thumb.jpg',
        text: 'Pic Title',
        id: 'Trokanac',
      }
    ]
  },
  mutations: {},
  actions: {

  },
  getters: {
    LoadedAlbum(state) {
      return (albumID) => {
        return state.albums.find((album) => {
          return album.id === albumID
        })
      }
    },
    loadAlbums(state) {
      return state.albums
    }
  }

})
