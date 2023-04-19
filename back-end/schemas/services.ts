export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'imageUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'service',
      title: 'Service',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
}
