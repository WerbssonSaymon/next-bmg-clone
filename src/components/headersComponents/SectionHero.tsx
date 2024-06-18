'use client';
import Image from 'next/image'
import woman from '@/assets/woman.png'

export interface SectionHeroProps {
    titleHero: string
    textHero: string
    colorHero: string
}

export default function SectionHero(props: SectionHeroProps){
    return (
        <section className='w-full h-[704px] flex'>
            <div className={`${props.colorHero} w-[50%] flex justify-center`}>
                <div className='flex flex-col justify-center w-[50%] gap-5'>
                    <h1 className='text-3xl text-white text-bold'>
                        {props.titleHero}
                    </h1>
                    <p className='text-justify text-white'>
                        {props.textHero}
                    </p>
                    <button className='bg-white text-orange-500 p-2 w-[200px] rounded-full'>Saiba mais</button>
                </div>  
            </div>
            <div className={`${props.colorHero} w-[50%] flex justify-center`}>
                <Image
                src={woman}
                alt="pessoa"
                />
            </div>
        </section>
    )
}