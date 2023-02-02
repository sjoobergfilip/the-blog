import RoundLogo from "../assets/image/logo/sodrabloggen_round.png";
import Image from "next/image";

const Logo = (props: any) => {
    const { renderDefault, title } = props;

    return (
        <div className='flex items-center'>
            <Image
                className='rounded-full object-cover'
                height={50}
                width={50}
                src={RoundLogo}
                alt='logo'
            />
            <>{renderDefault(props)}</>
        </div>
    );
};

export default Logo;
