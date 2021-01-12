import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      " saya merupakan lulusan SMK Telkom Malang tahun 2021 dengan kelas konsentrasi NODE JS",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "yudhistira arya" },
    { id: 2, title: "Email:", text: "aryarajasa0@gmail.com" },
    { id: 3, title: "Phone:", text: "0831 1106 4467" },
    { id: 4, title: "Linkedin", text: "arya rajasa" },
  ]);
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter"id="contact">
          <div className="col-6">
            <div className="about__img" >
              <img src="/images/dd.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info" >
              <h1>Hi There</h1>
              <div className="about__info-p1" >
                saya merupakan lulusan SMK Telkom Malang tahun 2021 dengan kelas konsentrasi
                NODE JS. Saya memiliki  pengalaman di fornt end ataupuk backend web developer 
              </div>
              <div className="about__info-p2">
                saya siap bekerja di bidang pemrogaman apapun karena saya telah 
                mempunyai dasar dasar pemograman yang kuat dari guru guru saya
              </div>
              <div className="info__contacts" >
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;