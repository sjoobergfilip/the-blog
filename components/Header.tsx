import Link from "next/link";
import Image from "next/image";
import RoundLogo from "../assets/image/logo/sodrabloggen_round.png";

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image
                        className='rounded-full object-cover'
                        height={60}
                        width={60}
                        src={RoundLogo}
                        alt='logo'
                    />
                </Link>
            </div>
            <div>
                <Link
                    target='_blank'
                    className='px-5 py-3 text-sm flex items-center border-2 border-white uppercase rounded-full'
                    href='https://printler.com/sv/print-shop/17211-filip-sjoberg/'
                >
                    Köp poster
                </Link>
            </div>
        </header>
    );
};

export default Header;
