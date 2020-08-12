import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ACTION from "../redux/actions/index";
import axios from 'axios';

const HttpRequest = (config) => {
    const dispatch = useDispatch()
    useEffect(() => {
        config.data && (() => {
            dispatch(ACTION.action({ type: config.begin, payload: null }))
            axios({
                method: config.method,
                url: config.url,
                data: config.data && config.data

            }).then((res) => {
                dispatch(ACTION.action({ type: config.success, payload: res.data }))
            }).catch((error) => {
                dispatch(ACTION.action({ type: config.failure, payload: null }))
            });
        })()
    }, [config.data]);
};

export default HttpRequest;
