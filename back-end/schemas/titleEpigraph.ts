export default {
  name: 'title',
  type: 'document',
  title: 'Title',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          {title: 'Page Title', value: 'pageTitle'},
          {title: 'About', value: 'about'},
          {title: 'Our Skills', value: 'ourSkills'},
          {title: 'Services', value: 'services'},
          {title: 'Projects', value: 'projects'},
          {title: 'Testimonials', value: 'testimonials'},
          {title: 'Contact', value: 'contact'},
          {title: 'Message', value: 'message'},
        ],
      },
    },
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
  ],
}
