import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bottom from './components/Bottom/Bottom.jsx'
import GoogleAuth from './components/GoogleAuth/GoogleAuth.jsx'
import Navigationbar from './components/Navigationbar/Navigationbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='135924759539-7shc21l2050l9639qn9rc5fpsf40g0mb.apps.googleusercontent.com'>

    <React.StrictMode>
   
   <App />
   <Bottom/>
   
 </React.StrictMode>,
 </GoogleOAuthProvider>
)