import { checkbox, integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'honeyhat',
};

export const Product = list({
  // TODO
  // access
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    // TODO fix unchecked default
    forSale: checkbox({
      label: 'For Sale',
      defaultValue: true,
    }),
    price: integer(),
    image: cloudinaryImage({ isRequired: true, cloudinary, label: 'Source' }),
  },
});

//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 100,
//       },
//     },
//     {
