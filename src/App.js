import React,{useEffect,useState,useRef} from 'react';
import Header from './components/Header/Header';
import EmojiList from './components/Emoji/EmojiList';
import {getEmoji,emojiSearch} from './utils/getEmoji';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () =>{

  const [emoji,setEmoji] = useState([]);
  const [search,setSearch] = useState('');
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const pageEnd = useRef();
  const fetchEmoji = async(page) =>{
    let emojiList = await getEmoji(page);
    setEmoji(emojiList);
    setLoading(true);
  }

  useEffect(()=>{
    if(!search){
      fetchEmoji(page)
    }
  },[page,search])


  const searchEmoji = async() =>{
    if(search){
      let results = await emojiSearch(search);
      if(results){
        setEmoji(results)
        setLoading(false);
      }
    }
    if(search.length === 0){
      await setEmoji(getEmoji(page));
      setLoading(true)
    }
  }

  const loadMore = () =>{
    setPage(prev=>prev + 1);
  }

  useEffect(()=>{
    if(loading){
      const observer = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
          loadMore()
        }
      },{threshold:1});
      observer.observe(pageEnd.current)
    }  
  },[loading])


  return (
    <div className="container main__area">
      <ToastContainer />
       <Header 
       search={search}
       setSearch={setSearch}
       searchEmoji={searchEmoji}
       />
       <EmojiList emoji={emoji} loading={loading}
       loadMore={loadMore}
       pageEnd={pageEnd}
       search={search}/>
    </div>
  );
}

export default App;
