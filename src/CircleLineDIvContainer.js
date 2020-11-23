import React from 'react'
import CircleLineDiv from './CircleLineDiv'
import {useAnimatedScale, useDimension} from './hooks'

const CircleLineDivContainer = (props) => {
  const {start, scale} = useAnimatedScale()
  const {w, h} = useDimension()
  return (
   <CircleLineDiv w = {w} h = {h} scale = {scale} onClick = {start}>
    </CircleLineDiv>
  )
}

export default CircleLineDivContainer