import React from "react";
import {
  FaGithub,
 
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "PORTOFOLIO",
    subHeading: "My Portofolio",
    text:
      "Berikyi adalah hasil pekerjaan saya selama saya sekolah di SMK Telkom Malang",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon:  <a href="https://github.com/YudhistiraA/web-adiwiata"><FaGithub className="commonIcons" /></a>,
      heading: "Web ADIWIYATA",
      text:
        "Web berbasis dari react untuk mengingatkan orang betapa pentingya lingkungan",
    },
    {
      id: 2,
      icon: <a href="https://github.com/YudhistiraA/gru-voice-assistant"><FaGithub className="commonIcons" /></a>,
      heading: "GRU Voice Asisstant",
      text:
        "merupakan asistant suara mirip cortana AI berbasis python ",
    },
    {
      id: 3,
      icon: <a href="https://github.com/YudhistiraA/perpustakaan-NODE-JS"><FaGithub className="commonIcons" /></a>,
      heading: "Web Perpustakaan",
      text:
        "Merupakan web perpustakaan berbasis NODE JS dengan menggunakan Api ",
    },
    {
      id: 4,
      icon: <a href="https://github.com/YudhistiraA/codeigniter-web-pengumpulan-tugas"><FaGithub className="commonIcons" /></a>,
      heading: "Web Pengumpulan Tugas",
      text:
        "Web ini digunakan untuk mengumpulkan tugas berbasis CodeIgniter",
    },
    {
      id: 5,
      icon: <a href="https://github.com/YudhistiraA/Onlineshop-laravel"><FaGithub className="commonIcons" /></a>,
      heading: "Online shop",
      text:
        "Merupakan Web toko online yang berbasis LARAVELL",
    },
    {
      id: 6,
      icon: <a href="https://github.com/YudhistiraA/realtime-chat-use-REACT-NODEJS"><FaGithub className="commonIcons" /></a>,
      heading: "Chating Real Time",
      text:
        "Merupakan web untuk chatting  menggunakan REACT JS dan NODE JS",
    },
  ]);
  return (
    <div className="services" id="service">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;