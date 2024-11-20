import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const handleDropdownClick = (index) => {
    // If the clicked dropdown is already open, close it; otherwise, open it
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the click is outside of it
    if (dropdownRefs.current && !dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container">
      <PhoenixDropdown
        isOpen={openDropdown === 3}
        onClick={() => handleDropdownClick(3)}
        ref={(el) => (dropdownRefs.current[3] = el)}
      />
      <GodrejInterioDropdown
        isOpen={openDropdown === 0}
        onClick={() => handleDropdownClick(0)}
        ref={(el) => (dropdownRefs.current[0] = el)}
      />
        <PhilipsDropdown
          isOpen={openDropdown === 2}
          onClick={() => handleDropdownClick(2)}
          ref={(el) => (dropdownRefs.current[2] = el)}
        />
      <MasimoDropdown
        isOpen={openDropdown === 1}
        onClick={() => handleDropdownClick(1)}
        ref={(el) => (dropdownRefs.current[1] = el)}
      />
    </div>
  );
};

const DropdownItem = React.forwardRef(({ imageSrc, alt, menuItems, isOpen, onClick }, ref) => {
  const handleMenuClick = (url) => {
    window.open(url, "_blank");
    onClick(); // Close the dropdown after selecting a menu item
  };

  return (
    <div className="dropdown-item flex flex-col items-center relative" style={{marginBottom:"136px" }} ref={ref}>
      <img
        onClick={onClick}
        src={imageSrc}
        alt={alt}
        className="h-40 object-cover border-gray-400 cursor-pointer transition-transform duration-200 hover:scale-105"
      />
      {isOpen && (
        <div className="dropdown-menu absolute bg-blue-200 p-4 w-40 rounded-lg shadow-lg">
          <ul>
            {menuItems.map((menu) => (
              <li
                onClick={() => handleMenuClick(menu.url)}
                className="p-1 text-lg cursor-pointer rounded hover:bg-blue-100"
                key={menu.name}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

const GodrejInterioDropdown = React.forwardRef((props, ref) => {
  const menuItems = [
    { name: "Google", url: "https://www.google.com" },
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "WhatsApp", url: "https://www.whatsapp.com" },
    { name: "Instagram", url: "https://www.instagram.com" },
  ];
  
  return (
    <DropdownItem 
      imageSrc="/Goodrej.png" 
      alt="Godrej" 
      menuItems={menuItems} 
      ref={ref}
      {...props}
    />
  );
});

const MasimoDropdown = React.forwardRef((props, ref) => {
  const menuItems = [
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Pinterest", url: "https://www.pinterest.com" },
    { name: "Snapchat", url: "https://www.snapchat.com" },
  ];

  return (
    <DropdownItem 
      imageSrc="/Masimo.webp" 
      alt="Masimo" 
      menuItems={menuItems} 
      ref={ref}
      {...props}
    />
  );
});

const PhilipsDropdown = React.forwardRef((props, ref) => {
 const menuItems = [
    { name: "EPIQ Elite", url: "https://mars-main-frontend.vercel.app/product/67396f93a68681ac70aaa52e" },
    { name: "EPIQ CVx", url: "http://localhost:5173/product/672c5a280cc26711be52f996" },
    { name: "5500 Series", url: "https://www.philips.co.in/healthcare/product/HC795140/5000-series-hc795140-premium-compact-ultrasound-system" },
    { name: "5500 CV", url: "https://mars-main-frontend.vercel.app/product/673d894747483db02540c46e" },
    { name: "Affiniti CVx", url: "https://mars-main-frontend.vercel.app/product/673b11182c46d0dbe36732af" },
    { name: "Affiniti 70", url: "https://mars-main-frontend.vercel.app/product/67396e64a68681ac70aaa52c" },
  ];

  return (
    <DropdownItem 
      imageSrc="/Philips.jpeg" 
      alt="Philips" 
      menuItems={menuItems} 
      ref={ref}
      {...props}
    />
  );
});

const PhoenixDropdown = React.forwardRef((props, ref) => {
  const menuItems = [
    { name: "TikTok", url: "https://www.tiktok.com" },
    { name: "Medium", url: "https://medium.com" },
    { name: "Flickr", url: "https://www.flickr.com" },
    { name: "Vimeo", url: "https://vimeo.com" },
  ];

  return (
    <DropdownItem 
      imageSrc="/Phoenix.jpg" 
      alt="Phoenix" 
      menuItems={menuItems} 
      ref={ref}
      {...props}
    />
  );
});

export default Dropdown;
