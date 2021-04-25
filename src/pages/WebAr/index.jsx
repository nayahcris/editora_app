/* eslint-disable */
import { AFrameRenderer, Marker } from '../../components'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import React from 'react'



export default function ReactArApp (){
    const history = useHistory()
    function goBack(){
      history.push("/conto")
    }
    return (
        <div className="container">
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>REALIDADE AUMENTADA</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AFrameRenderer inherent={true}>
                  <Marker parameters={{ preset: "hiro" }}>
                    <a-box color="red" position="0 0.09 0" scale="0.4 0.8 0.8">
                      <a-animation
                        attribute="rotation"
                        to="360 0 0"
                        dur="2000"
                        easing="linear"
                        repeat="indefinite"
                     />
                   </a-box>
                  </Marker>
                </AFrameRenderer>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={goBack}>Fechar</Button>
            </Modal.Footer>
          </Modal.Dialog>
           
        </div>
       
    )
}