import React from "react";
import {Grid} from "@mui/material";
import "./ListTweets.scss";
import Tweet from "../Tweet";

export default function ListTweets(props){

    const {allTweets, deleteTweet, setAllTweets} = props;

    if (!allTweets || allTweets.length === 0) {

        return (

            <div className="list-tweets-empty">
                <h2>No hay tweets...</h2>
            </div>
        )
        
    }

    return (

        <Grid container spacing={3} className="list-tweets">
            {allTweets.map((tweet, index) => {

                
                return (
                    <Grid key = {index} item xs = {4}>
                        <Tweet
                            tweet={tweet} allTweets={allTweets} setAllTweets={setAllTweets} index={index} deleteTweet={deleteTweet}
                        />
                    </Grid>
                )

            })}
        </Grid>

    )
}