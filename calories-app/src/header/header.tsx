import React, { useState, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsFillCalendar2DateFill, BsFillPersonFill } from "react-icons/bs";
import { IoFastFood, IoStatsChart } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { Popover } from "antd";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import CalendarAnt from "../pages/calendar/calendar";
import "./header.css";

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return (
    <header>
      <div className="header-container">
        <div className="circle-container">
          <div className="circle">
            <HiMenuAlt2 style={{ fontSize: "24px" }} />
          </div>
        </div>
        <div className="date-container">{formattedDate}</div>

        <div className="calendar-container">
          <div className="circle-container">
            <Popover
              title="Calendar"
              content={<CalendarAnt />}
              trigger="click"
              placement="bottomRight"
            >
              <div className="circle">
                <BsFillCalendar2DateFill style={{ fontSize: "22px" }} />
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div className="header-menu-container">
        <Link to="/" className="home-item">
          <ImHome style={{ fontSize: "28px", color: "#636363" }} />
        </Link>
        <Link to="/stats" className="stat-item">
          <IoStatsChart style={{ fontSize: "28px", color: "#636363" }} />
        </Link>
        <Link to="/recipes" className="food-item">
          <IoFastFood style={{ fontSize: "28px", color: "#636363" }} />
        </Link>
        <Link to="/profile" className="profile-item">
          <BsFillPersonFill style={{ fontSize: "28px", color: "#636363" }} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
