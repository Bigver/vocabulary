import sanityClient from '@sanity/client';


export const client = sanityClient({
  projectId: 'zjwm7qqa',
  dataset: 'production',
  apiVersion: '2022-12-02',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
});



export const urlFor = (source) => builder.image(source);