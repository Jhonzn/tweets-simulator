import React, {useState} from "react";
import {FormControl, FormGroup, TextField, Button} from "@mui/material";
import "../FormSendTweet/FormSendTweet.scss"

export default function FormEditTweet(props){

    const { editTweet, tweet } = props;

    const [formValue, setFormValue] = useState({
        name: tweet.name || "",
        tweet: tweet.tweet || "",
    });

    const onFormChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };
    return (
    
        <div className="form-send-tweet">

            <h2 className="form-send-tweet__title">Editar tweet</h2>
            <form 
            className="form-send-tweet__form" 
            onSubmit={event => editTweet(event, formValue)}
            onChange = {onFormChange}
            >

                <FormControl>
                    <FormGroup>
                        <TextField
                        className="form-send-tweet__form-name"
                        type = "text"
                        name = "name"
                        placeholder = {tweet.name}
                        margin = "normal"
                        value={formValue.name}/>
                    </FormGroup>
                    <FormGroup>
                        <TextField
                        className="form-send-tweet__form-textarea"
                        name="tweet"
                        multiline
                        rows="6"
                        placeholder = {tweet.tweet}
                        margin="normal"
                        value={formValue.tweet}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>

            </form>

        </div>
    )

}
