import React, {useEffect} from "react";
import "./signIn.scss";
import Header from "../Header/Header"
import Check from "./check.jsx";
import { Link } from 'react-router-dom'

const SingIn = () => {
    useEffect(() => {
        if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'error')
        alert('invalid email or password');
    }, [])
    
    const singInClicked = () => {
        const result = Check()
        if (result.check === true) {
            document.forms["sign-in"].submit();
        }
    }
    return (
        <div className="register-container row ">
            <Header />
            <div className="text-container row col l10 m10 offset-l1 offset-m1">
                <div className="bold-text">
                    ТАНЫ ИРЭЭДҮЙН ӨӨРТӨӨ ХИЙХ ХӨРӨНГӨ ОРУУЛАЛТ
				</div>
                <div className="text">
                    Таньд олон давуу тал бий болох болно
				</div>
            </div>
            <div className="down_button"></div>

            <form id="sign-in" className="sign-in-container row" action="/sign-in" method="post" onSubmit={e => e.preventDefault()}>
                <div className="input">
                    <label className="head-text left align">И-МАЙЛ</label>
                    <input placeholder="ЦАХИМ ЩУУДАНГИЙН ХАЯГ" id="email" type="text" name="email" className="sign-in-input validate"></input>
                </div>

                <div className="input">
					<label className="head-text left-align">НУУЦ ДУГААР</label>
					<input placeholder="КОДОО ОРУУЛНА УУ" minLength="8" id="password" name="password" type="password" className="sign-in-input validate"></input>
				</div>

                <div className="bottom">
					<Link to='/sign-up' className="valign-wrapper sign-in">Бүртгүүлэх</Link>
					<button className="btn register" onClick={() => singInClicked()}>Нэвтрэх</button>
				</div>
            </form>
        </div>
    )
}


export default SingIn;