/* eslint-disable */
import { AFrameRenderer, Marker } from '../../components'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { Entity } from 'aframe-react'



export default function ReactArApp (){
  const history = useHistory()
  function voltar() {
    history.goBack()
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
                  <Entity
                    geometry={{ primitive: "box" }}
                    material={{ color: "red" }}
                    position={{ x: 0, y: 0.03, z: 0 }}
                  />
              </Marker>
            </AFrameRenderer>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={voltar}>Fechar</Button>
            </Modal.Footer>
          </Modal.Dialog>
           
        </div>
       
    )
}