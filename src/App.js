import logo from "./logo.svg";
import "./App.css";
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import {useEffect} from "react"
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256")
var CryptoJS = require("crypto-js");

function Myhash(event) {
  event.preventDefault();
  var namelabel = document.getElementById("name").value;
  var psdlabel = document.getElementById("psd").value;
  const user = {
    name :namelabel,
    psd : psdlabel,
  };
console.log(user)

  
  let string = JSON.stringify(user);
  console.log(string);
  const secret = "Hello123";
  let encrypted = CryptoJS.AES.encrypt(string, secret).toString();
  var bytes = CryptoJS.AES.decrypt(encrypted, secret);

  console.log(encrypted);

  localStorage.setItem("user", encrypted);
  var originalText = bytes.toString(CryptoJS.enc.Utf8).toString();;
 console.log(originalText);
}

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <form text-align="center" onSubmit={Myhash}>
          <div>
            <label> Name :</label>
            <input type="text" id="name" required />
            <div>
              <label> Password : </label>
              <input type="text" id="psd" required />
            </div>

            <div>
              <input type="submit" />
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
