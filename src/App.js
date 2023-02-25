import { useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {
  const [photo, setphoto] = useState('')
  const [picks, setpick] = useState([])


  // get request here
const GetPhoto = () => {
  axios.get(`https://pixabay.com/api/?key=21975348-25b098cf4b8de11da0a8977cf&q=${photo}&image_type=photo&pretty=true`)
  .then(data => setpick(data.data.hits))
}


  return (
    <div className=" container text-center mt-5">
      <h1 className='text-center mb-4'>Image Search Gallery</h1>
      <input type="text" className='form-control' onChange={(e) => setphoto(e.target.value)} value={photo}/> 
      <button className='btn btn-outline-dark mt-3' onClick={GetPhoto}>Search</button>

      <div className="container mt-5 ">
                <div className="row text-center text-lg-start">
                    {picks.map((value, index) => {
                        return (
                          <div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>
                              
                                    <img className="img-fluid  d-block mb-4 h-100 img-thumbnail" src={value.largeImageURL} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
    </div>
  );
}

export default App;
