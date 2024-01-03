import { Typography } from '@mui/material'
import './styles.css'

interface TitlePageProps {
  text: string
}

export function TitlePage({ text }: TitlePageProps): JSX.Element {
  return (
    <div className="titlePage">
      <Typography variant="h5">{text}</Typography>
    </div>
  )
}
