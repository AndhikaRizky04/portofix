import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/** Button ala shadcn/ui, token warna dipetakan ke palet forest + lime proyek ini. */
const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap select-none cursor-pointer',
    'text-sm font-semibold outline-none',
    'transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out',
    'focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950',
    'active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-lime text-forest-950 shadow-[0_10px_30px_-12px_rgba(140,198,63,0.75)] hover:bg-lime-400 hover:shadow-[0_14px_34px_-12px_rgba(140,198,63,0.9)]',
        outline:
          'border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:border-lime/60 hover:text-lime-300',
        ghost: 'text-white/75 hover:bg-white/[0.07] hover:text-white',
        link: 'h-auto px-0 text-white/70 underline-offset-4 hover:text-lime-300 hover:underline',
      },
      size: {
        default: 'h-11 rounded-xl px-5',
        sm: 'h-9 rounded-lg px-3.5 text-[13px]',
        lg: 'h-12 rounded-xl px-6',
        icon: 'size-11 rounded-xl',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
