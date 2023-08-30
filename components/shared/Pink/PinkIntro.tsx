"use client";

import { ImagePink, TImagePink } from '@/constants/Image.constant';
import { cn } from '@/lib/utils';
import Image from 'next/image'

export interface IImagePink {
    className?: string;
    height?: number;
    width?: number;
    type: TImagePink;
}

function PinkIntro({ className, height, width, type }: IImagePink): JSX.Element {
    return (
        <div className={cn('fixed', className)}>
            <Image src={ImagePink[type]} width={width ?? 100} height={height ?? 200} alt={''} />
        </div>
    );
}

export default PinkIntro;