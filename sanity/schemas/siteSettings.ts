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
      initialValue: '919035077840',
    },
    {
      name: 'address',
      title: 'Studio Physical Address',
      type: 'text',
      initialValue: '36, 20th Main Rd, Jay Bheema Nagar, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560068',
    },
  ],
};
