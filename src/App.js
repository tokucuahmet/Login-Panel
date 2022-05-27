import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import axios from 'axios';


function App() {
  const [dataUser, setDataUser] = useState([]); // Panelden gelen kullanıcı adını tutmak için
  const [dataUserPwd, setDataUserPwd] = useState([]); // Panelden gelen kullanıcı şifresini tutuyoruz

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setDataUser(res.data[0].name); // İsim bilgisini çekiyoruz
        setDataUserPwd(res.data[0].username); // Username bilgisini çekiyoruz - Şifre
      })
      .catch(err => console.log(err))
  }, [dataUser]);

  console.log("Gelen Data: ", dataUser , "-" , dataUserPwd); // Veri Akışını takip ediyoruz

  const adminUser = { // Kullanıcı bilgilerini Login' değişkenine aktarıyoruz.
    username: dataUser,
    password: dataUserPwd
  };

  const [user, setUser] = useState({ name: "", username: "" }); // email and password are empty strings 
  const [error, setError] = useState(""); // Hata mesajının görünümünün boş olduğu durumdur.

  const Login = details => { // details is an object
    console.log(details);
    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log("Giriş Başarılı");
      setUser({ // İsim ve email bilgilerini setUser fonksiyonuna gönderiyoruz. 
        name: details.name,
        username: details.username
      });
    }
    else { // Hata mesajının görünümünün güncellendiği durumdur.
      console.log("Hatalı Giriş");
      setError("Hatalı Giriş");
    }
  };
  const Logout = () => { // Logout is a function
    setUser({ name: "", username: "" });
  };

  return (
    <div className="App">
      {(user.username !== "") ? ( // Bilgiler doğru ise sisteme login yapabiliyoruz.
        <div className="welcome">
          <h1>Hoşgediniz,  <span>{user.username}</span></h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm error={error} Login={Login} /> // Giriş yapılmadıysa LoginForm componentini göster
      )}
    </div>

  );
}

export default App;
