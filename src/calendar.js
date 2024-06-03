import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

const CalendarComponent = () => {

  return (
    <div id="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={ptBrLocale}
        events={[
            { title: '16:15 Biologia', start: '2024-04-04', backgroundColor: '#0000ff' },
            { title: '09:15 Matemática', start: '2024-04-09', backgroundColor: '#ff0000' },
            { title: '12:45 Banco de dados', start: '2024-04-25', backgroundColor: '#800080' },
            // aqui teriam as listas de lembretes cadastrados nos dias específicos
        ]}
      />
    </div>
  );
};

export default CalendarComponent;
