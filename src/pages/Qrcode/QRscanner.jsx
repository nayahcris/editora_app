import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'


function QRscanner() {

    const [qrscan, setQrscan] = useState('Nenhum link adicionado');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <div className="container">
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>Scanner de QrCode</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>
            <center>
            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />
             </center>
      </div>
    );
  }
  
  export default QRscanner;