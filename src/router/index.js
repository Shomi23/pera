export default [{
    path: '/',
    name: 'Home',
    component: Home => import('../components/home.vue')
  },
  {
    path: '/album/:id',
    name: 'album',
    props: true,
    component: album => import('../components/album.vue')
  }
]
