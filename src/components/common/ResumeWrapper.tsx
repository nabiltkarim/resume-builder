import { Paper } from '@mui/material'
import { useRef, useState, useEffect, ReactNode, FC } from 'react'

export interface ResumeProps {
  children?: ReactNode
  fontFamily?: string
  fontColor?: string
}

export const ResumeWrapper: FC<ResumeProps> = ({ children, fontFamily, fontColor }) => {
  const resumeRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number>(1)

  useEffect(() => {
    const calculateScale = () => {
      const paper = resumeRef.current
      if (paper) {
        const containerHeight = window.innerHeight
        const containerWidth = window.innerWidth
        const scaleHeight = containerHeight / paper.offsetHeight
        const scaleWidth = containerWidth / paper.offsetWidth
        const newScale = Math.min(scaleWidth, scaleHeight, 0.79)
        setScale(newScale)
      }
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)

    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  return (
    <Paper
      elevation={3}
      ref={resumeRef}
      sx={{
        transform: `scale(${scale})`,
        transformOrigin: 'top',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        fontFamily,
        color: fontColor,
      }}
    >
      {children}
    </Paper>
  )
}
