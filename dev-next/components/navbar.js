import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return (
        <nav>
            <div className='logo-container'>
                <Link href='/'>
                    <Image className='logo' src='/logo-test.png' width={85} height={50} alt="Logo"/>
                </Link>
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/product'>Product</Link>
        </nav>
    );
}