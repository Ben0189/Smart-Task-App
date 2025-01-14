import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import SVG from 'react-inlinesvg';

const iconVariants = cva(
  'inline-block fill-inherit line-height-6 font-inherit overflow-hidden self-center',
  {
    variants: {
      size: {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
      },
    },
  }
);
export default function Icon({
  name = 'question_mark',
  styleVariant = 'outlined',
  size = 'md',
  className,
}: {
  name: string;
  styleVariant?: 'outlined' | 'filled' | 'rounded' | 'sharp' | 'two-tone';
} & VariantProps<typeof iconVariants> &
  React.HTMLAttributes<HTMLDivElement>) {
  const src = `/assets/material-icons/${styleVariant}/${name}.svg`;
  return <SVG src={src} className={cn(iconVariants({ size }), className)} />;
}
