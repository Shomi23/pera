export default [
  {
    path: '/album/:id',
    name: 'album',
    props: true,
    component: album => import('../components/album.vue')
  }
]
