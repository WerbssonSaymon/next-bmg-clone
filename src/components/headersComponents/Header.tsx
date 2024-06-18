import Image from 'next/image'
import Logo from '@/assets/logo2.png'
import IconUser from '@/assets/icon-user.svg'
import { ItemMenu } from './ItemMenu'
import ButtonAcess from './ButtonAcess'
import Link from 'next/link'

export function Header(){
    return (
        <header className="flex items-center w-full h-20 bg-white">
            <div className="w-full max-w-[1246px] px-4 mx-auto">
                <div className='w-full flex justify-between'>
                    <div className="flex items-center flex-row gap-14">
                        <Link href={"/"}>
                            <Image className='w-[100px] h-[100px]'
                            src={Logo}
                            alt="logo"
                            />
                        </Link> 
                        <ul className='flex gap-4'>
                            <li>
                                <Link href={"/users"}>
                                    <ItemMenu
                                    name="Para você"
                                    />
                                </Link>             
                            </li>
                            <li>
                                <Link href={"/interprise"}>
                                    <ItemMenu
                                    name="Para seu negócio"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/help"}>
                                    <ItemMenu
                                    name="Ajuda"
                                    />  
                                </Link>    
                            </li>
                            <li>
                                <Link href={"/bmg"}>
                                    <ItemMenu
                                    name="O banco Bmg"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href={"/register"} className='flex items-center justify-center'>
                        <ButtonAcess/>  
                    </Link>
                </div>
            </div>
        </header>
    )
}