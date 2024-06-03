import React from 'react';
import Navbar from '../widgets/navbar';
import Sidebar from '../widgets/sidebar';
import Footer from '../widgets/footer';
import DialogMateria from '../widgets/dialogmateria';
import DialogLembrete from '../widgets/dialoglembrete';
import CalendarComponent from '../calendar';

const Homepage = () => {
    return (        
        <div className="container-xxl bg-white p-0">
        <Navbar />
        <hr className="custom" />
        <div className="wrapper d-flex align-items-stretch">
          <Sidebar />
          <div id="content" className="p-4 p-md-5 pt-5">
            <CalendarComponent/>
          </div>
          <DialogMateria />
          <DialogLembrete />
        </div>
        <Footer />
      </div>
);
}

export default Homepage;