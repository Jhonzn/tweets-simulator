import React,{useState} from "react";
import "./Tweet.scss";
import {Card, CardContent} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import moment  from "moment";
import EditTweet from '../EditTweet/EditTweet';


export default function Tweet(props){

    const { tweet: {
        name, tweet, time
    }, index, deleteTweet, allTweets, setAllTweets} = props;

    const [toastProps, setToastProps] = useState({
        open: false,
        text: null
      });


    return (

        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>
                        {name}
                    </h5>

                    <div className="icons">

                    <DeleteTwoToneIcon  className = "icon-delete"onClick = {() => deleteTweet(index)}/>
                        
                    <EditTweet 
                    className = "icon-edit"
                    tweet={tweet} 
                    name={name} 
                    index={index} 
                    allTweets={allTweets} 
                    setAllTweets={setAllTweets} 
                    setToastProps={setToastProps} />

                    </div>
                    
                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add-tweet">
                    {moment(time).format("DD/MM/YYYY HH:mm")}
                </div>
            </CardContent>
        </Card>
    )



 }