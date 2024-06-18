import Image from 'next/image'
import IconUser from '@/assets/icon-user.svg'

export default function ButtonAcess(){
    return (
        <button className='flex items-center gap-4 bg-orange-500 h-22 p-7'>
                <Image
                src={IconUser}
                alt="icon user"
                />
                <span className='text-white font-bold mr-5'>
                    Acessar conta
                </span>
        </button>
    )
}