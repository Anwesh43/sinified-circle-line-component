import {
  useState, 
  useEffect
} from 'react'
import {sinify} from './utils'

const scGap = 0.01 
const delay = 20

export const useAnimatedScale = () =>{
  const [scale, setScale] = useState(0)
  const [animated, setAnimated] = useState(false)
  return {
    scale,
    start() {
      if (!animated) {
        let currScale = scale 
        setAnimated(true)
        const interval = setInterval(() => {
          currScale += scGap 
          setScale(currScale)
          if (currScale > 1) {
            setScale(0)
            setAnimated(false)
            clearInterval(interval)
          }
        }, delay)
      }
    }
  }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
      window.onresize = () => {
        setW(window.innerWidth)
        setH(window.innerHeight)
      }
      return () => {
        
      }
    })
    return {
      w, 
      h
    }
}

export const useStyle = (scale, w, h) => {
  const size = Math.min(w, h)/ 10
  const sf = sinify(scale)
  const sf1 = sinify(sf)
  const position = 'absolute'
  const strokeWidth = Math.min(w, h) / 90
  const background = '#3F51B5'
  return {
    circleStyle() {
      const left = `${(w - size) * sf}px`
      const top = `${(h - size) - (h / 2) * sf1}px`
      const borderRadius = `50%`
      const width = `${size}px`
      const height = `${size}px`
      
      return {
        position, 
        width, 
        height, 
        left, 
        top, 
        borderRadius, 
        background
      }
    }, 
    lineStyle() {
      const left = `${w / 2 - strokeWidth / 2}px`
      const top = `${h - h / 2 * sf1}px`
      const width = `${strokeWidth}px`
      const height = `${h * .5 * sf1}px`
      return {
        left, 
        top, 
        width, 
        height, 
        background, 
        position
      }
    }
  }
}