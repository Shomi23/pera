import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    albums: [{
        slike: [{
            name: 'Nights/01.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Nights/02vert.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Nights/03vert.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Nights/04vert.jpg',
            vert: false,
            size: 'lg12'
          }
        ],
        thumbnail: 'Nights/Thumb.jpg',
        text: 'Pic Title',
        id: 'Nights',
      },
      {
        slike: [{
            name: 'Niksi/01.jpg',
          },
          {
            name: 'Niksi/02.jpg',
          },
          {
            name: 'Niksi/03.jpg',
          },
          {
            name: 'Niksi/04.jpg',
          },
          {
            name: 'Niksi/05.jpg',
          },
          {
            name: 'Niksi/06.jpg',
          },
          {
            name: 'Niksi/07.jpg',
          },
          {
            name: 'Niksi/08.jpg',
          },
          {
            name: 'Niksi/09.jpg',
          },
          {
            name: 'Niksi/10.jpg',
          },
          {
            name: 'Niksi/11.jpg',
          },
          {
            name: 'Niksi/12.jpg',
          },
          {
            name: 'Niksi/13.jpg',
          },
          {
            name: 'Niksi/14.jpg',
          },
          {
            name: 'Niksi/15.jpg',
          },
          {
            name: 'Niksi/16.jpg',
          }
        ],
        thumbnail: 'Niksi/Thumb.jpg',
        text: 'Pic Title',
        id: 'Niksi',
      },
      {
        slike: [{
            name: 'Places/01.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/02.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Places/03.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Places/04.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/05.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/06.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Places/07.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Places/08.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/09.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/10.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Places/11.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Places/12.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/13.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/14.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/15.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/16.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Places/17.jpg',
            vert: false,
            size: 'lg12'
          }
        ],
        thumbnail: 'Places/Thumb.jpg',
        text: 'Pic Title',
        id: 'Places',
      }, {
        slike: [{
            name: 'Us/01.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/02.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/03.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/04.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/05.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/06.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/07.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/08.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/09.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/10.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/11.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/12.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/13.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/14.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/15.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/16.jpg',
            vert: false
          },
          {
            name: 'Us/17.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/18.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/19.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/20.jpg',
            vert: true,
            size: 'lg6'
          },
          {
            name: 'Us/21.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/22.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/23.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/24.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/25.jpg',
            vert: false,
            size: 'lg12'
          },
          {
            name: 'Us/26.jpg',
            vert: false,
            size: 'lg12'
          }
        ],
        thumbnail: 'Us/Thumb.jpg',
        text: 'Pic Title',
        id: 'Us',
      }
    ]
  },
  mutations: {},
  actions: {},
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
