import React, {useEffect, useState, useRef} from 'react'
import { Box, Text, Heading } from 'theme-ui'

const Counter = ({value = 0, duration = 960, prefix = '', suffix = '', start = false, fontSize = [4,5]}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = null
    const startTime = performance.now()

    const loop = now => {
      const t = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor(t * value))
      if (t < 1) raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => raf && cancelAnimationFrame(raf)
  }, [start, value, duration])

  return (
    <Heading as="h3" sx={{ fontSize: fontSize, mb: 1 }}>{prefix}{count}{suffix}</Heading>
  )
}

const IconStudents = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor" opacity="0.9"/>
    <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z" fill="currentColor" opacity="0.7"/>
  </svg>
)

const IconYears = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9"/>
    <path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
    <path d="M7 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
  </svg>
)

const IconPrize = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l2.09 4.26L19 7l-3 2.91L16.18 14 12 11.9 7.82 14 9 9.91 6 7l4.91-.74L12 2z" fill="currentColor" opacity="0.95"/>
    <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8"/>
  </svg>
)

const StatBox = ({label, value, prefix, suffix, icon}) => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      })
    }, {threshold: 0.4})
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={{
        minWidth: 200,
        px: 3,
        py: 3,
        borderRadius: 'extra',
        boxShadow: visible ? '0 10px 24px rgba(0,0,0,0.12)' : 'card',
        background: 'elevated',
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'transform .28s ease, box-shadow .28s ease',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ mr: 3, color: 'primary', display: 'flex', alignItems: 'center', width: 40 }}>{icon}</Box>
      <Box sx={{ textAlign: 'left', width: ['calc(100% - 56px)', 'auto'] }}>
        <Counter value={value} duration={960} start={visible} prefix={prefix} suffix={suffix} fontSize={[4,5]} />
        <Text sx={{ fontSize: 3, color: 'muted' }}>{label}</Text>
      </Box>
    </Box>
  )
}

const Stats = props => (
    <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'stretch', py: 3, flexWrap: 'wrap' }} {...props}>
    <StatBox label="Students" value={60} icon={<IconStudents/>} />
    <StatBox label="Years" value={7} icon={<IconYears/>} />
    <StatBox label="Prize money" value={100} prefix="$" icon={<IconPrize/>} />
  </Box>
)

export default Stats
