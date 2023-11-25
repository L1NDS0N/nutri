"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUser, FaChartBar } from "react-icons/fa";
import { IoNutrition } from "react-icons/io5";


export default function XSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { label: "Dashboard", icon: <FaHome size={20} />, link: "/dashboard" },
    { label: "Avaliação Nutricional", icon: <IoNutrition  size={20} />, link: "/avaliacao-nutricional" },
    { label: "Pacientes", icon: <FaUser size={20} />, link: "#" },
    { label: "Relatórios", icon: <FaChartBar size={20} />, link: "#" },
  ];

  return (
    <aside className={`bg-purple-500 text-white p-4 h-full ${isOpen ? 'w-full' : 'w-16'} md:w-48 transition-all duration-300`}>
      <button className="sm:hidden text-white" onClick={toggleSidebar}>
        {isOpen ? 'Fechar' : 'Abrir'}
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden md:block'}`}>
        <ul className={`${isOpen ? 'flex flex-col' : 'hidden md:flex md:flex-col'}`}>
          {sidebarItems.map((item, index) => (
            <li key={index} className={`mb-2 md:flex md:items-center ${isOpen ? 'flex' : 'flex-col items-center'}`}>
              {item.icon}
              <Link
                href={item.link}
                className={`ml-2 mt-2 md:mt-0 ${
                  isOpen ? "visible" : "hidden md:visible"
                } hover:text-gray-300`}
              >
                {isOpen ? item.label : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
