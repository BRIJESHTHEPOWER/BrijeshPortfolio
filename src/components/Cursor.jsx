import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    /* Only show on true pointer devices (mouse/trackpad), not touch */
    const isPointer = window.matchMedia('(pointer: fine)').matches
    setVisible(isPointer)
  }, [])

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const dotX = useSpring(mx, { stiffness: 620, damping: 40 })
  const dotY = useSpring(my, { stiffness: 620, damping: 40 })
  const ringX = useSpring(mx, { stiffness: 135, damping: 28 })
  const ringY = useSpring(my, { stiffness: 135, damping: 28 })

  useEffect(() => {
    if (!visible) return
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [visible, mx, my])

  if (!visible) return null

  return (
    <>
      <motion.div className="c-dot" style={{ x: dotX, y: dotY }} />
      <motion.div className="c-ring" style={{ x: ringX, y: ringY }} />
    </>
  )
}
