import { useEffect, useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import colors from "react-multi-date-picker/plugins/colors"
export default function TheCalendar({ currentDate, calendarRange, calendars }) {
  const [update, setUpdate] = useState(true);
  const [selectedCalander,setSelectedCalander]=useState();
  useEffect(() => {
    
    
    setUpdate(!update);
  }, [currentDate]);
  function showEvent(e)
  {
    setSelectedCalander(e);
  }
  return (
    <div className="flex flex-wrap">
      <div className="w-[600px] lg:w-1/2 my-2">
        {calendars
          .filter(
            (e) => e.month == currentDate.month && e.year == currentDate.year && new Date(e.end)>new Date()
          )
          .map((cal) => {
            return (
              <div key={cal.start} className={`border-b p-2 duration-150   ${selectedCalander==cal?'bg-gray-200':''}` }>
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
          mapDays={({date})=>{
              
            let color;
            if(calendars.find((e)=>new DateObject(e.start).day==date.day && new DateObject(e.start).month.name ==date.month.name))
            {
              color="green"
              return { onClick:()=>{showEvent(calendars.find((e)=>new DateObject(e.start).day==date.day && new DateObject(e.start).month.name ==date.month.name))}, className: "start highlight highlight-" + color }
            }
            
            
          }}
            minDate={new Date()}
            
            currentDate={currentDate}
            className="scale-x-105 w-full"
            
            readOnly
            value={calendarRange}
            multiple
            
          />
        )}
        {update && (
          <>
            <Calendar
            
            mapDays={({date})=>{
              
              let color;
              if(calendars.find((e)=>new DateObject(e.start).day==date.day && new DateObject(e.start).month.name ==date.month.name))
              {
                color="green"
                return { onClick:()=>{showEvent(calendars.find((e)=>new DateObject(e.start).day==date.day && new DateObject(e.start).month.name ==date.month.name))}, className: "start highlight highlight-" + color }
              }
              
              
            }}
              minDate={new Date()}
              
              currentDate={currentDate}
              className="scale-x-105 w-full"
              
              readOnly
              value={calendarRange}
              multiple
              
            />
          </>
        )}
        <div className="flex flex-wrap mt-[16px] gap-[8px] items-center text-[12px]">
        <div className="w-[24px] h-[24px] rounded-full" style={{backgroundColor:'green'}}></div><div>Check-in Date</div>
        
        </div>
      </div>
    </div>
  );
}
