export default {
  name: 'category',
  title: 'Tattoo Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title (e.g. Travel Tattoos)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Tagline (e.g. Cartography of the soul)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Category Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
