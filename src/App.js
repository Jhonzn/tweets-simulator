import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import { Container, Snackbar} from "@mui/material";
import SendTweet from './components/SendTweet';
import {TWEETS_STORAGE} from "./utils/constants";
import ListTweets from './components/ListTweets';


function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });

  const [allTweets, setAllTweets] = useState([]);

  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  },[reloadTweets])

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true)
  }
 
  return (
    <Container className = "tweets-simulator" max-width = "false">
      <Header/>
      <SendTweet setToastProps = {setToastProps} setAllTweets={setAllTweets} allTweets = {allTweets}/>
      <ListTweets allTweets={allTweets} deleteTweet ={deleteTweet} setAllTweets={setAllTweets}/>
      <Snackbar
  anchorOrigin={{
    vertical: "top",
    horizontal: "right"
  }}
  open={toastProps.open}
  autoHideDuration={3000} // Se cerrará automáticamente en 3 segundos
  onClose={() => setToastProps({ open: false, text: null })} // Cierra el snackbar
  message={<span id='message-id'>{toastProps.text}</span>}
/>
    </Container>
  );
}

export default App;
