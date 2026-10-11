export default {
  name: 'artist',
  title: 'Artists',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Title / Role (e.g. Lead Visionary)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'specialty',
      title: 'Specialty / Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Profile / Portfolio Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
