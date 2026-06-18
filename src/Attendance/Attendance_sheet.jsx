import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

const Attendance_sheet=({attendanceList})=>{
    return <div className="bg-[#e5e5e5] w-[330px] h-72 m-auto p-3 relative bottom-36 rounded-xl overflow-hidden md:h-[400px] md:w-[450px] md:bottom-22 xl:w-[600px] xl:h-[500px] xl:ml-18">
        <FullCalendar
        plugins={[dayGridPlugin,interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        dateClick={(info)=>console.log(info.dateStr)}
        events={
            attendanceList
}
        />
    </div>
}
export default  Attendance_sheet;