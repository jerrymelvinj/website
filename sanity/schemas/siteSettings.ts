export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Studio Name',
      type: 'string',
      initialValue: 'Swink Tattoo Studio',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Artistry, Untamed.',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number (with country code)',
      type: 'string',
      initialValue: '919833065209',
    },
    {
      name: 'address',
      title: 'Studio Physical Address',
      type: 'text',
      initialValue: 'TV Complex, 2, 60 Feet Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560034',
    },
  ],
};
