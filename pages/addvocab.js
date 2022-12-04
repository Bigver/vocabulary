import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useRef , useState }from 'react'
import React from 'react'

const addvocab = () => {
    const form = useRef();

    const [values, setValues] = useState({
        vocabulary: "vocabulary",
        translations: "translations"
      });

      const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(values)
        fetch('/api/vocabulary', {
          method: 'POST',
          body: JSON.stringify(values),
        }).then(() => {
          console.log("เพิ่มคำศัพท์แล้ว")
          location.reload()
        }).catch((err) => {
          console.log(err)
        })
      };
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
  return (
    <div className='addvocab-container' >
        <div className='textbox'>
            <form className='form' onSubmit={handleSubmit} ref={form}>
                <h1>Vocabulary</h1>
                <input name="vocabulary"  type="text" onChange={onChange}/>
                <h1>Translation</h1>
                <input name="translations"  type="text" onChange={onChange}/>
                <div className='form-submit'>
                  <input type="submit" value="send"  />
              </div>
            </form>
        </div>
        <div className='header' >
            <a href="./"><MenuBookIcon className='book' /></a>
        </div>
    </div>
  )
}

export default addvocab