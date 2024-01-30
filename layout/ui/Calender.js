import { useEffect, useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";

export default function TheCalendar({ currentDate, calendarRange, calendars }) {
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    console.log(currentDate.month);
    setUpdate(!update);
  }, [currentDate]);
  console.log(calendars);
  return (
    <div className="flex flex-wrap">
      <div className="w-[600px] lg:w-1/2 my-2">
        {calendars
          .filter(
            (e) => e.month == currentDate.month && e.year == currentDate.year && new Date(e.end)>new Date()
          )
          .map((cal) => {
            return (
              <div key={cal.start} className="border-b p-2">
                <div className="w-full">
                  <h1 className="text-[16px] font-bold">
                    {cal.name}
                  </h1>
                  <small className="pb-0 text-gray-600 text-[9px] font-sans">{new DateObject(cal.start).format('ddd, DD MMM YYYY')} to {new DateObject(cal.end).format('ddd, DD MMM YYYY')}</small>
                </div>
                <div className="text-[14px]">{cal.description}</div>
              </div>
            );
          })}
      </div>
      <div className="w-[600px] lg:w-1/2 ">
        {!update && (
          <Calendar
            minDate={new Date()}
            showOtherDays
            currentDate={currentDate}
            className="scale-x-105 w-full"
            buttons={false}
            readOnly
            value={calendarRange}
            multiple
            range
          />
        )}
        {update && (
          <>
            <Calendar
              minDate={new Date()}
              showOtherDays
              currentDate={currentDate}
              className="scale-x-105 w-full"
              buttons={false}
              readOnly
              value={calendarRange}
              multiple
              range
            />
          </>
        )}
      </div>
    </div>
  );
}
