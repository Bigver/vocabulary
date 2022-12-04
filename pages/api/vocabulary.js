import sanityClient from '@sanity/client';


const client = sanityClient({
    projectId: 'zjwm7qqa',
    dataset: 'production',
    apiVersion: '2022-12-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
  });




export default async function vocabulary(
    req, res){
    const {vocabulary,translations} = JSON.parse(req.body);
    try {
        await client.create({
            _type: 'vocabulary',
            vocabulary,
            translations
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'ส่งไม่สำเร็จ' , err});
    }

    console.log("ส่งสำเร็จ")
    res.status(200).json({ name: 'Submit' })
  }
  