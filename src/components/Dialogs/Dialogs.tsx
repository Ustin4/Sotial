import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/redux-store";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessage: (text: string) => void
    onSendMessageClick: () => void

};
type SendParamsType = {
    send: string
}

const Dialogs: React.FC<PropsType> = ({
                                          dialogsPage
                                          , updateNewMessage
                                          , onSendMessageClick

                                      }) => {

    let state = dialogsPage

    let dialogsElements = state.dialogs.map((d) => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
    let messagesElements = state.messages.map((m) => (<Message key={m.id} message={m.messages}/>));
    let newMessagesText = state.newMessagesText;
    const formik = useFormik({
        initialValues: {
            send: '',
        },

        onSubmit: (values: SendParamsType) => {
            formik.resetForm()
            console.log(values)

        }
    })

    const messagePostsClickHandler = () => {
        onSendMessageClick()
    };


    const onChangeMessagePostsHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        updateNewMessage(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.messagesTextBox}>
                    <div>

                        <TextField
                            fullWidth
                            label="Enter your message"
                            id="fullWidth"
                            // onChange={onChangeMessagePostsHandler}
                            // value={newMessagesText}
                            size={'small'}
                            {...formik.getFieldProps('send')}
                        />

                        {/*<textarea*/}
                        {/*    placeholder="Enter your message"*/}
                        {/*    onChange={onChangeMessagePostsHandler}*/}
                        {/*    value={newMessagesText}*/}
                        {/*/>*/}
                    </div>
                    <div>
                        {/*<button className={s.buttonMessages} onClick={messagePostsClickHandler}>*/}
                        {/*    add*/}
                        {/*</button>*/}

                        <Button
                            type={"submit"}
                            variant="contained"
                            endIcon={<SendIcon/>}
                            className={s.buttonMessages}
                            onClick={messagePostsClickHandler}

                        >add
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Dialogs;