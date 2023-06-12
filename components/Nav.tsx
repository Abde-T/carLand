import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Nav = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href='/' className="flex justify-center items-center">
                    <Image src='/logo_.png' alt="CarCatalog logo" width={118} height={18} className="object-contain" />
                </Link>
                <CustomButton title='Sign In' btnType='button' containerStyles="text-[#e6e6e7] font-extrabold rounded-full bg-[#373485] min-w-[130px] border border-[#e6e6e7]"/>
            </nav>
        </header>
    );
};

export default Nav;