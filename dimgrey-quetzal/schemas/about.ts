export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'epigraph',
      title: 'Epigraph',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
