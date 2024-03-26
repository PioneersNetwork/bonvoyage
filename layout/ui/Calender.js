import { useEffect, useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import colors from "react-multi-date-picker/plugins/colors";
export default function TheCalendar({ currentDate, calendarRange, calendars }) {
  const [update, setUpdate] = useState(true);
  const [selectedCalander, setSelectedCalander] = useState();
  const [selectedCalanders, setSelectedCalanders] = useState([]);
  useEffect(() => {
    console.log(currentDate.month);
    setSelectedCalanders([]);
    setSelectedCalanders([
      ...calendars.filter(
        (e) =>
          e.month === currentDate.month.number &&
          e.year == currentDate.year
      ),
    ]);
    
    setUpdate(!update);
  }, [currentDate]);


  function showEvent(e) {
    setSelectedCalander(e);
  }


  function changeMonth(month)
  {
    setSelectedCalanders([
      ...calendars.filter(
        (e) =>
          e.month === month.month.number &&
          e.year == month.year
      ),
    ]);
  }
  return (
    <div className="flex flex-wrap-reverse">
      <div className="w-[600px] lg:w-1/2">
        {selectedCalanders.length==0 &&<div className="text-center mt-3"> Not Available</div>}
        {selectedCalanders.map((cal,k) => {
          return (
            <div
              key={cal.start+cal.name+cal.end+k}
              className={`border-b p-2 duration-150 mt-3  ${
                selectedCalander == cal ? "bg-gray-200" : ""
              }`}
            >
              <div className="w-full">
                <h1 className="text-[16px] font-bold">{cal.name}</h1>
                <small className="pb-0 text-gray-600 text-[14px] font-sans">
                  {new DateObject(cal.start).format("ddd, DD MMM YYYY")} to{" "}
                  {new DateObject(cal.end).format("ddd, DD MMM YYYY")}
                </small>
              </div>
              <div className="text-[16px] mt-2">{cal.description}</div>
            </div>
          );
        })}
      </div>
      <div className="w-[600px] lg:w-1/2 ">
        {!update && (
          <div className="mx-auto">
          <Calendar
          onMonthChange={(e)=>changeMonth(e)}
            mapDays={({ date }) => {
              let color;
              if (
                calendars.find(
                  (e) =>
                    new DateObject(e.start).day == date.day &&
                    new DateObject(e.start).month.name == date.month.name
                )
              ) {
                color = "green";
                return {
                  onClick: () => {
                    showEvent(
                      calendars.find(
                        (e) =>
                          new DateObject(e.start).day == date.day &&
                          new DateObject(e.start).month.name == date.month.name
                      )
                    );
                  },
                  className: "start highlight highlight-" + color,
                };
              }
            }}
            
            minDate={new Date()}
            currentDate={currentDate}
            className="w-full mx-auto"
            readOnly
            value={calendarRange}
            multiple
          />
          </div>
        )}
        {update && (
          <div className="mx-auto">
            <Calendar
            onMonthChange={(e)=>changeMonth(e)}
              mapDays={({ date }) => {
                let color;
                if (
                  calendars.find(
                    (e) =>
                      new DateObject(e.start).day == date.day &&
                      new DateObject(e.start).month.name == date.month.name
                  )
                ) {
                  color = "green";
                  return {
                    onClick: () => {
                      showEvent(
                        calendars.find(
                          (e) =>
                            new DateObject(e.start).day == date.day &&
                            new DateObject(e.start).month.name ==
                              date.month.name
                        )
                      );
                    },
                    className: "start highlight highlight-" + color,
                  };
                }
              }}
              
              minDate={new Date()}
              currentDate={currentDate}
              className="w-full mx-auto"
              readOnly
              value={calendarRange}
              multiple
            />
          </div>
        )}
        <div className="flex flex-wrap mt-[16px] gap-[8px] items-center text-[12px] mx-[16px]">
          <div
            className="w-[24px] h-[24px] rounded-full"
            style={{ backgroundColor: "#009688" }}
          ></div>
          <div>Check-in Date</div>
        </div>
      </div>
    </div>
  );
}
