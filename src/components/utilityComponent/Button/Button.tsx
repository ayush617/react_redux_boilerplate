import { Button as MuiButton, ButtonProps } from "@mui/material"

const Button: React.FC<ButtonProps> = ({ sx, ...restProps }) => <MuiButton sx={{ borderRadius: ['6px', '6px', '5px'], ...sx }} {...restProps} />
export default Button