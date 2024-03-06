import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from './Dropdown.module.css'

const Dropdown = () => {


    const elements = [
        'account',
        'wallet',
        'bonuses',
        'bets',
        'history'
    ]

    const dropdownRef = useRef(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }

    useClickOutside(dropdownRef, () => {
        setDropdownOpen(false);
    });

    const [element, setElement] = useState('account');

    const handleClick = (item: string) => {
        setElement(item)
        setDropdownOpen(false)
    }



    return (
        <>
            <div ref={dropdownRef} className="relative w-[240px] text-white font-size-[14px] leading-[16.5px]">
                <button
                    onClick={toggleDropdown}
                    className={styles.dropdown}
                >
                    <div className="w-full h-full bg-[#34c4f6] bg-opacity-10 flex items-center justify-center">
                        {element}
                    </div>
                </button>

                {isDropdownOpen && (<div className="absolute mt-[5px] w-full flex flex-col rounded bg-[#2B2C36] border border-[#47C2E9] border-opacity-18">
                    {elements && elements.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className="w-full h-[44px] flex justify-between items-center px-[24px] py-[14px] uppercase border-b border-[#BAC1CC] border-opacity-10"
                        >
                            {item}

                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.31541 9.932C5.31541 9.82 5.37141 9.764 5.48341 9.764H12.2734L9.44541 6.978C9.36141 6.90333 9.36141 6.824 9.44541 6.74L10.1734 6.026C10.2574 5.95133 10.3367 5.95133 10.4114 6.026L14.6254 10.352C14.6907 10.436 14.6907 10.5153 14.6254 10.59L10.4114 14.916C10.3367 14.9907 10.2574 14.9907 10.1734 14.916L9.44541 14.202C9.36141 14.1273 9.36141 14.0527 9.44541 13.978L12.2734 11.192H5.48341C5.37141 11.192 5.31541 11.136 5.31541 11.024V9.932Z" fill="white" />
                                </svg>
                            </span>
                        </button>
                    ))}
                </div>)}
            </div>
        </>
    )
};

export default Dropdown;