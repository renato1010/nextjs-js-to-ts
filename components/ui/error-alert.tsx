import { ReactNode } from 'react'
import classes from './error-alert.module.css'

function ErrorAlert(props: { children: ReactNode }): JSX.Element {
  return <div className={classes.alert}>{props.children}</div>
}

export default ErrorAlert
