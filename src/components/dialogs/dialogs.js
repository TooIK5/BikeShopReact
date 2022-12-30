import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDialogs } from "../../redux/API/API";
import { Badge, Spin } from 'antd';

import {
    Button,
    Form,
    Input,
} from 'antd';

const { TextArea } = Input;

const Message = (props) => {

    return <div className="dialog__message">
        <div className="dialog__img">

            <img src="http://localhost:5000/nopicture.jpg" />

        </div>
        <div className="dialog__textBlock">
            <span className="dialog__name">{props.props.username}</span>
            <div className="dialog__text">{props.props.text}</div>
        </div>
        <div className="dialog__date">{props.props.date}</div>
    </div>
}

const Chat = (props) => {
    return <div className="chat">
        <div className="caht__name">
            <div className="dialog__img">
                {props.props.avatar ? <img src={"http://localhost:5000/" + props.props.avatar} /> : <img src="http://localhost:5000/nopicture.jpg" />}

            </div>
            {props.props.event === "connection" ? <Badge dot>
                <span className="dialog__name">{props.props.username}</span>
            </Badge> : <span className="dialog__name">{props.props.username}</span>}
        </div>
        <div className="chat__text"></div>
    </div>
}

const Dialogs = React.memo((props) => {
    const dispatch = useDispatch();
    const socket = useRef();
    const [connected, setConnected] = useState(false);
    const [mes, setMessage] = useState([]);

    let chats = useSelector(state => {
        console.log(state.chat.dialogs)
        return state.chat.dialogs
    })

    const user = useSelector(state => {
        return state.account.user
    })

    useEffect(() => {

        if (user) {
            dispatch(getDialogs(user.id));
            socket.current = new WebSocket("ws://localhost:5050");
            socket.current.onopen = () => {
                const message = {
                    event: "connection",
                    username: user.username,
                    uid: user.id,
                    did: 1,
                    date: Date.now()
                }
                socket.current.send(JSON.stringify(message))
                setConnected(true);
            }

            socket.current.onerror = () => {
                console.log("socket ошибка")
            }

            socket.current.onmessage = (event) => {
                const message = JSON.parse(event.data);
                setMessage(prev => [...prev, message])
            }

            return () => {
                socket.current.onclose = () => {
                    const message = {
                        event: "close",
                        username: user.username,
                        uid: user.id,
                        did: 1,
                    }
                    socket.current.send(JSON.stringify(message))
                    console.log("socket закрыт")
                }
            }
        }
    }, [user]);

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 },
    };

    const onFinish = (values) => {
        const message = {
            event: "message",
            username: user.username,
            text: values.message,
            uid: user.id,
            did: 1
        }

        socket.current.send(JSON.stringify(message))
    }

    if (!connected) {
        return <div>Подключение не установлено</div>
    } else {
        return <div className="dialog">
            <div className="dialog__windows">
                <div className="dialog__chatBar">

                    {chats.map(el => <Chat props={el} />)}

                </div>
                <div className="dialog__window">
                    {mes.map(el => <Message props={el} />)}
                </div>
            </div>

            <Form
                autoComplete="off"
                className="dialog-form"
                {...formItemLayout}
                onFinish={onFinish}>
                <Form.Item
                    name="message">
                    <TextArea
                        placeholder="Controlled autosize"
                        autoSize={{
                            minRows: 3,
                            maxRows: 5,
                        }}
                    />
                </Form.Item>
                <Form.Item  >
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    }
})

export default Dialogs;
