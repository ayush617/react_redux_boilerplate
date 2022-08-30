import { Box, SxProps } from "@mui/material"
import placeholder from '../../../assets/svg/placeholder.svg'

type props = {
  src?: string,
  alt?: string
  sx?: SxProps
}

const Img: React.FC<props> = ({ src, alt, sx = {} }) => {
  return (<Box component={`img`} src={src || placeholder} alt={alt || 'image'} sx={{ lineHeight: 1, maxWidth: '100%', ...sx }} />)
}
export default Img