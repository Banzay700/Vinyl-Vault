import React from 'react'

type CommonButtonProps = {
  children?: string | React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
}

type PrimaryButtonProps = CommonButtonProps & { primary?: boolean; secondary?: never }
type SecondaryButtonProps = CommonButtonProps & { secondary?: boolean; primary?: never }

export type ButtonProps = PrimaryButtonProps | SecondaryButtonProps
