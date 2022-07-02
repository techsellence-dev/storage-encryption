import logo from "./logo.svg";
import "./App.css";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { useEffect } from "react";
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");

function Myhash(event) {
  event.preventDefault();
  let namelabel = document.getElementById("name").value;
  let psdlabel = document.getElementById("psd").value;
  const secret = "Hello123";
  let jsonObjectToString;
  let retrieveLocal;
  const user = {
    name: namelabel,
    psd: psdlabel,
  };
  console.log(` object is`);
  console.log(user);

  jsonObjectToString = JSON.stringify(user);
  console.log(`Json object to String is ${jsonObjectToString}`);

  let encrypted = CryptoJS.AES.encrypt(jsonObjectToString, secret).toString();
  console.log(encrypted);
  localStorage.setItem("user", encrypted);
  retrieveLocal=localStorage.getItem("user")
  var retrieveLocalDecrypt = CryptoJS.AES.decrypt(retrieveLocal, secret);
  var originalText = retrieveLocalDecrypt.toString(CryptoJS.enc.Utf8).toString();
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
