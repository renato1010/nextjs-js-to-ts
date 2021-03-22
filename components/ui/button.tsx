import Link from 'next/link'
import { ReactNode } from 'react'

import classes from './button.module.css'
type ButtonPropsType = {
  link?: string
  onClick?: () => void
} & { children: ReactNode }
function Button(props: ButtonPropsType): JSX.Element {
  return props?.link ? (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  ) : (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
