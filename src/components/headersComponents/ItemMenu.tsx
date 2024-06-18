import Arrow from '@/assets/arrow-down.svg';
import Image from 'next/image'

type ItemMenuProps = {
    name: string;
}

export function ItemMenu({name}: ItemMenuProps){
    return (
        <button className='flex items-center gap-3'>
            <span className='font-bold'>{name}</span>
            <Image
            src={Arrow}
            alt="flecha"
             />
         </button>
    )
}