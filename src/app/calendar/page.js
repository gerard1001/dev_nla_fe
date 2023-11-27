"use client"
import React, { useState, useRef, useEffect } from 'react';
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

const Calendar = () => {
  const calendarRef = useRef();
  const [viewType, setViewType] = useState("Week");
  const [timeRangeSelectedHandling, setTimeRangeSelectedHandling] = useState("Enabled");
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(new DayPilot.Date().firstDayOfMonth());

  const handleEventClick = async (args) => {
    const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
    if (!modal.result) { return; }
    const e = args.e;
    e.data.text = modal.result;
    calendarRef.current.events.update(e);
  };
  const [config, setConfig] = useState({
    startDate: new Date(),
    days: DayPilot.Date.today().daysInMonth(),
    scale: "Day",
    timeHeaders: [
        { groupBy: "Month" },
        { groupBy: "Day", format: "d" }
    ],
});
  const handleTimeRangeSelected = async (args) => {
    const modal = await DayPilot.Modal.prompt("Enter event name:");
    if (!modal.result) { return; }

    const newEvent = {
      id: DayPilot.guid(),
      text: modal.result,
      start: args.start,
      end: args.end,
      barColor: "#6aa84f",
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const changeView = (newViewType) => {
    setViewType(newViewType);
  };

  const navigate = (direction) => {
    setStartDate((prevStartDate) => prevStartDate.addDays(direction === 'next' ? 7 : -7));
  };

  useEffect(() => {
    // Load event data
    setEvents([
      {
        id: 1,
        text: "Event 1",
        start: "2023-09-07T10:30:00",
        end: "2023-09-07T13:00:00",
      },
      {
        id: 2,
        text: "Event 2",
        start: "2023-09-08T09:30:00",
        end: "2023-09-08T11:30:00",
        barColor: "#6aa84f",
      },
    ]);
  }, []);

  return (
    <div>
      <div className='flex bg-white  items-center justify-center  '>
        <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={() => navigate('prev')}> {'<< '}Previous</button>
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-gray dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={() => changeView("Month")}>Month</button>
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-gray dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'  onClick={() => changeView("Week")}>Week</button>
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-gray dark:border-gray-600 dark:hover:bg-white-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'  onClick={() => changeView("Day")}>Day</button>
        <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-gray-800 dark:hover:bg-white-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={() => navigate('next')}>Next {" >>"}</button>
      </div>
      <DayPilotCalendar
        viewType={viewType}
        timeRangeSelectedHandling={timeRangeSelectedHandling}
        onEventClick={handleEventClick}
        onTimeRangeSelected={handleTimeRangeSelected}
        ref={calendarRef}
        {...config}
        startDate={startDate}
        events={events}
        cellWidth={50}
        cellHeight={50}
        timeHeaders={[
          { groupBy: "Month" },
          { groupBy: "Day", format: "d" }
      ]}
        cellBorderTop="1px solid #ddd"
        cellBorderColor="#ddd"
        onBeforeCellRender={(args) => {
          const today = new DayPilot.Date().getDatePart();
          if (args.cell.start.getTime() === today.getTime()) {
            args.cell.backColor = "#ffcc66"; // Highlight color for the current day
          }
        }}
      />
    </div>
  );
};

export default Calendar;
