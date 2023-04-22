type CommonIconButtonProps = {
  onClick: () => void
  counter: number
}

type PrimaryIconProps = CommonIconButtonProps & { primary: boolean; secondary?: never }
type SecondaryIconProps = CommonIconButtonProps & { secondary: boolean; primary?: never }

export type IconButtonPropsType = PrimaryIconProps | SecondaryIconProps
