import React from 'react'
import {useStyle} from './hooks'

const CircleLineDiv = ({scale, w, h, onClick}) => {
  const {circleStyle, lineStyle} = useStyle(scale, w, h)
  return (
    <div onClick = {onClick}>
      <div style = {circleStyle()}></div>
      <div style = {lineStyle()}></div>
    </div>
  )
}

export default CircleLineDiv