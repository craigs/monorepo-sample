import { FC } from 'react'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
)
