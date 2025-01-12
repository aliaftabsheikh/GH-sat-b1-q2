export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
        validation: (Rule) => Rule.min(0).max(100),
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables cropping and focal point options
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule) => Rule.min(0).max(5),
      },
      {
        name: 'ratingCount',
        title: 'Rating Count',
        type: 'number',
        validation: (Rule) => Rule.min(0),
      },
    ],
  };
  