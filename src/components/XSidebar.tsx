"use client";
import { useState } from "react";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";

import Link from "next/link";
import { FaHome, FaUser, FaChartBar } from "react-icons/fa";
import { IoNutrition } from "react-icons/io5";

export default function XSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { label: "Dashboard", icon: <FaHome size={24} />, link: "/dashboard" },
    {
      label: "Avaliação Nutricional",
      icon: <IoNutrition size={24} />,
      link: "/nutritional-assessment",
    },
    { label: "Pacientes", icon: <FaUser size={24} />, link: "/patient" },
    { label: "Relatórios", icon: <FaChartBar size={24} />, link: "#" },
  ];

  return (
    <aside
      className={`bg-purple-500 text-white p-4 h-full ${
        isOpen ? "w-full" : "w-16"
      } md:w-48 transition-all duration-300`}
    >
      <button className="sm:hidden text-white" onClick={toggleSidebar}>
        {isOpen ? (
          <TbLayoutSidebarRightExpandFilled size={24} />
        ) : (
          <TbLayoutSidebarLeftExpandFilled size={24} />
        )}
      </button>
      <nav className={`${isOpen ? "block" : "hidden md:block"}`}>
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden md:flex md:flex-col"
          }`}
        >
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`mb-2 md:flex md:items-center ${
                isOpen
                  ? "flex justify-center items-center"
                  : "flex-col items-center"
              }`}
            >
              <Link href={item.link}>
                {isOpen && (
                  <span
                    className={`flex flex-row justify-content-center items-center gap-8 text-center hover:text-gray-300 text-sm md:text-base`}
                  >
                    <div>{item.icon}</div>
                    <div>{item.label}</div>
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
