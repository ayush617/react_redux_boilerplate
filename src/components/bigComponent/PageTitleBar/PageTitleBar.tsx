import { Card, Grid, Typography } from "@mui/material"
import { ReactNode } from "react"

type props = {
  title?: string,
  children?: ReactNode
}

const PageTitleBar: React.FC<props> = ({ title, children }) => {
  return (
    <Card variant={`outlined`} sx={{ px: 2, py: 1, mb: [2] }}>
      <Grid container columnSpacing={2} alignItems="center">
        {title && <Grid item xs>
          <Typography component={`h3`} variant={`h5`}>{title}</Typography>
        </Grid>}
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </Card>
  )
}
export default PageTitleBar