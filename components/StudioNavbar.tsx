import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
    return (
        <div className='bg-sanity-gray'>
            <div className='flex items-center justify-between p-5'>
                <Link className='text-[#F2BF1B] flex items-center' href='/'>
                    <ArrowUturnLeftIcon className='h-6 w-6 text-[#F2BF1B] mr-2' />
                    Tillbaka till bloggen
                </Link>
                <div>
                    Välkommen till Södrabloggens Contentpage, här skapar vi magi
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    );
};

export default StudioNavbar;
