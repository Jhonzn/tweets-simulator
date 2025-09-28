import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit'; 
import ModalContainer from "../ModalContainer";
import FormEditTweet from "../FormEditTweet";
import { TWEETS_STORAGE } from "../../utils/constants";

export default function EditTweet(props) {
    const { setToastProps, name, tweet, index, allTweets, setAllTweets } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    const editTweet = (event, formValue) => {
        event.preventDefault();
        
        let updatedTweets = [...allTweets]; 
        updatedTweets[index] = {
            ...updatedTweets[index],
            name: formValue.name,
            tweet: formValue.tweet,
            time: new Date().toISOString(), // Actualiza la fecha del tweet
        };

        setAllTweets(updatedTweets);
        localStorage.setItem(TWEETS_STORAGE, JSON.stringify(updatedTweets));
        setToastProps({
            open: true,
            text: "Tweet editado correctamente",
        });
        closeModal();
    };

    return (
        <div className="send-tweet">
            <EditIcon className="icon-edit" color="primary" onClick={openModal} />
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormEditTweet editTweet={editTweet} tweet={{ name, tweet }} />
            </ModalContainer>
        </div>
    );
}
