import { Card, CardActionArea, CardMedia } from '@mui/material'
import { FC } from 'react'
import { ITemplateData } from '../../types/template'

interface ILayoutOptionProps {
  readonly src: string
  readonly alt: string
  readonly onSelect: (layout: keyof ITemplateData, id: string) => void
}

const LayoutOption: FC<ILayoutOptionProps> = ({ src, alt, onSelect }) => {
  const handleClick = () => {
    onSelect('layout', alt)
  }

  return (
    <Card className="w-48 h-48 m-2" onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" alt={alt} height="96" image={src} />
      </CardActionArea>
    </Card>
  )
}

export default LayoutOption
