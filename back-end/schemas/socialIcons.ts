export default {
  name: 'socialIcon',
  type: 'document',
  title: 'Social Icon',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'url',
    },
  ],
}
