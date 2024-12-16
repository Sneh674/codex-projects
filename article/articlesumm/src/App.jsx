import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [ipurl, setIpurl]=useState('')
  const [summ, setSumm]=useState('')

  const summarize = async () => {
    setSumm('Please wait, loading....');
    console.log("Button clicked!");
    const options = {
      method: 'GET',
      url: 'https://extract-and-summarize.p.rapidapi.com/extract/',
      params: {
        // url: 'https://time.com/6310115/ai-revolution-reshape-the-world/'
        url: ipurl
      },
      headers: {
        'x-rapidapi-key': '06bf238e05msh64bf9606e87052ep159f96jsn34f0668cd0cc',
        'x-rapidapi-host': 'extract-and-summarize.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.md);
      setSumm(response.data.md);
    } catch (error) {
      console.error(error);
      setSumm('error occured, please check the url or whether the provided url has article in a proper manner or not and try again');
    }
  };
  

  return (
    <div className='main h-screen w-screen bg-slate-300 m-0'>
      <div className="atitle text-blue-600 flex justify-center"><h1>Article Summarizer</h1></div>
      <div className=' inpdiv flex justify-center'>
        <input type="text" className='pl-2 pr-2' name="" id="" onChange={(e) => setIpurl(e.target.value)}/>
        <button onClick={summarize} className='bg-indigo-400 pl-2 pr-2'>Enter</button>
      </div>
      <div className="summary">{summ}</div>
    </div>
  )
}

export default App
