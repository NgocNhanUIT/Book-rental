import React, { useContext } from "react";
import './notificationpage.style.css';
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import NotificationContainer from "../../components/layouts/notification-container/NotificationContainer";
import { UserContext } from "../../App";

const NotificationPage = () => {
  const authenticatedUser = useContext(UserContext);

  return (
    <section>
      <Navbar darkTheme={true} />
        <NotificationContainer user={authenticatedUser} />
      <Footer />
    </section>
  );
};

export default NotificationPage;