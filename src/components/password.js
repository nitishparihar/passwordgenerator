import React, { useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Lightning from "../icons/lightning.png"
import Dots from "../icons/dots.png"

export default function Password() {
    const [password, setPassword] = useState("")
    const [inputvalue, setInputvalue] = useState(8);
    const [copied1, setCopied1] = useState(false)
    const [copied2, setCopied2] = useState(false)
    const [copied3, setCopied3] = useState(false)
    const [copied4, setCopied4] = useState(false)
  
    function handleChange(e) {
      setInputvalue(e.target.value);
    }
  
    function generatePassword() {
      let results = []
      for (let j = 0; j < 4; j++) {
        let result = ""
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let charactersLength = characters.length
        for (let i = 0; i < inputvalue; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        results[j] = result
      }
      inputvalue > 15 ? setPassword("") : 
      inputvalue <8 ? setPassword("") : 
      setPassword(results) 
    }
  
    function copy1() {
      if(password[0]) {
      setCopied1(true)
      }
      setTimeout(() => {
        setCopied1(false)
      }, 1500);
    }
  
    function copy2() {
      if(password[1]) {
        setCopied2(true)
      }
      setTimeout(() => {
        setCopied2(false)
      }, 1500);
    }
  
    function copy3() {
      if(password[2]) {
        setCopied3(true)
      }
      setTimeout(() => {
        setCopied3(false)
      }, 1500);
    }
  
    function copy4() {
      if(password[3]) {
        setCopied4(true)
      }
      setTimeout(() => {
        setCopied4(false)
      }, 1500);
    }
  
   function handleKeypress(e) {
     if (e.key === 'Enter') {
       generatePassword();
     }
   };
  
    return (
      <main>
        <div className="header">
          <h1 className="heading">Random<br /><span className="highlighted">Password Generator</span></h1>
          <h2 className="subtitle">Generate 4 random passwords with one click</h2>
          <p className="subtitle-1">Password length: Max- 15 & Min- 8</p>
          <input id="input-box" type="number" placeholder="8" onChange={handleChange} onKeyDown={handleKeypress}/>
          <button className="generate-btn" onClick={generatePassword}><img src={Lightning} alt="Password Generator"/>Generate passwords</button>
        </div>
          {inputvalue > 15 ? <span className="error">Password Max Length is 15</span> : inputvalue < 8 ? <span className="error">Password Min Length is 8</span> : ""}
        <hr />
        <div className="password-wrapper">
          <div className="passwords">
            <p className="password-display">
              <CopyToClipboard text={password[0]} onCopy={() => copy1()}>
                {copied1 ? <span className="password">Password Copied!</span> : password ? <span className="password">{password[0]}</span> : <img src={Dots} alt="password box"/>}
              </CopyToClipboard>
            </p>
            <p className="password-display">
              <CopyToClipboard text={password[1]} onCopy={() => copy2()}>
                {copied2 ? <span className="password">Password Copied!</span> : password ? <span className="password">{password[1]}</span> : <img src={Dots} alt="password box"/>}
              </CopyToClipboard>
            </p>
            <p className="password-display">
              <CopyToClipboard text={password[2]} onCopy={() => copy3()}>
                {copied3 ? <span className="password">Password Copied!</span> : password ? <span className="password">{password[2]}</span> : <img src={Dots} alt="password box"/>}
              </CopyToClipboard>
            </p>
            <p className="password-display">
              <CopyToClipboard text={password[3]} onCopy={() => copy4()}>
                {copied4 ? <span className="password">Password Copied!</span> : copied4 ? <span className="password">Password Copied!</span> : password ? <span className="password">{password[3]}</span> : <img src={Dots}alt="password box" />}
              </CopyToClipboard>
            </p>
          </div>
        </div>
      </main>
    )
  }