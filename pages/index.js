import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { client } from '../lib/client';
import React from 'react'
import { useState }from 'react'
import Link from 'next/link'

const Home = ( {vocabulary} ) => {
  const [values, setValues] = useState(0);
  const lengthVocab = vocabulary.length
  const handleRandom = () => {
    const randomVocab = Math.floor(Math.random() * lengthVocab)
    setValues(randomVocab)
  };
  const ranVocab = vocabulary[values]
  return (
    <div>
      <div className='content'>
        <div className='vocab-container'>
          <h1>Vocabulary</h1>
          <div className='next'>
            <ArrowBackIosIcon/>
            <p>{ranVocab.vocabulary}</p>
            <ArrowForwardIosIcon onClick={handleRandom} />
          </div>
        </div>
        <div className='transltion-container'>
          <div className='button'>
            <dubu>
              <eyes></eyes>
              <smile></smile>
           </dubu>
          </div>
          <p>
            {ranVocab.translations}
          </p>
        </div>
      </div>
     
      <div className='head' >
        <a href="./addvocab"><AddCircleIcon className='add' /></a>
      </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "vocabulary"]';
  const vocabulary = await client.fetch(query);

  return {
    props: { vocabulary }
  }
}


export default Home
