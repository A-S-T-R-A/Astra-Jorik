export default {
  name: 'contacts',
  type: 'document',
  title: 'Contacts',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contactType',
      title: 'Contact Type',
      type: 'string',
      options: {
        list: [
          {title: 'Custom', value: 'custom'},
          {title: 'Email', value: 'email'},
          {title: 'Phone', value: 'phone'},
        ],
      },
    },
    {
      name: 'custom',
      title: 'Custom',
      type: 'string',
      hidden: ({document}: any) => document && document.contactType !== 'custom',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({document}: any) => document && document.contactType !== 'email',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      hidden: ({document}: any) => document && document.contactType !== 'phone',
    },
  ],
}
