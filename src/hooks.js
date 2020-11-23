import {
  useState, 
  useEffect
} from 'react'
import {sinify} from './utils'

const scGap = 0.02 
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