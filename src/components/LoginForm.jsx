import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ username: '', password: '' })

    const submitHandler = (e) => { // Bilgileri göndermek için kullanılır.
        e.preventDefault()
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}> {/* Form submit işlemi için kullanılır. */}
            <div className="form-inner"> {/* Başlık Kısmı */}
                <h2>PROCSİN</h2>
                {(error !== "") ? <div className="error">{error}</div> : ""} {/* Hata mesajı */}
                <div className="form-group"> {/* İsim gösterilmesi için kullanılır. */}
                    <label htmlFor="name">Kullanıcı Adınız:</label>
                    <input type="text" className="form-control" id="name" placeholder="Adınızı Giriniz" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>
                <div className="form-group"> {/* Şifre gösterilmesi için kullanılır. */}
                    <label htmlFor="pwd">Şifreniz:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Şifrenizi Giriniz" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" /> {/* Submit butonu */}
            </div>
        </form>
    )
}

export default LoginForm;