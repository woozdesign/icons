import { IconType } from './SvgPath';

export type ThemeAccentColor =
  | 'gray'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'mauve'
  | 'slate'
  | 'olive'
  | 'sage'
  | 'sand'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky';

export interface IconProps {
  type: IconType;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  color?: ThemeAccentColor;
}
