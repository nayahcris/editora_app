/* eslint-disable */
import React, { useState } from 'react'
import { } from "react-bootstrap"
import { DefaultXRControllers, ARCanvas, Interactive } from '@react-three/xr'
import { Text } from '@react-three/drei'

function Box({ color, size, scale, children, ...rest }: any) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshPhongMaterial attach="material" color={color} />
      {children}
    </mesh>
  )
}

function Button(props: any) {
  const [hover, setHover] = useState(false)
  const [color, setColor] = useState<any>('pink')

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0)
  }

  return (
    <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
      <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
      <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
          Testes!!
       </Text>
      </Box>
    </Interactive>
  )
}

const Conectese: React.FC = () => {
  return (
    <div className="container">
        <br />
        <h1 className="text-center">Conecte-se</h1>
        <br />
        <ARCanvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} color={'pink'} />
          <DefaultXRControllers />
        </ARCanvas>
    </div>
  )
}
export default Conectese
