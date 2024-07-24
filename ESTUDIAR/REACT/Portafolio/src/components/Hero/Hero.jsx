import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Front end Developer </h2>
        <p className="">
        Tengo un especial interés en la parte Frontend de las aplicaciones web y páginas web. Siento una fuerte motivación por aprender y dedicarme a esta faceta del desarrollo, ya que es algo que me apasiona profundamente. Disfruto creando interfaces intuitivas y atractivas, ya que veo en ello la oportunidad de establecer una conexión efectiva con los usuarios. Mi objetivo es hacer que la experiencia de navegación sea no solo funcional, sino también placentera, facilitando la comprensión y guía para quienes utilicen las aplicaciones o sitios web que desarrolle. Mi deseo es contribuir al desarrollo de tecnologías que no solo sean eficientes, sino también accesibles y amigables para un público diverso. Aspirando a ser un desarrollador Frontend, estoy emocionado por participar en proyectos que me brinden la oportunidad de aprender y crecer profesionalmente, especialmente aquellos que permitan aplicar mis habilidades en el ámbito tecnológico para mejorar servicios. 
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="../assets/images/react2.png" alt="" />
          </div>
          <img id="photo" src="../assets/images/fotojkDev2.png" alt="" />
        </div>

        <div>
            <div className="tech-icon">
                <img src="../assets/images/html5_icon.png" alt="" />
            </div>
            <div className="tech-icon">
                <img src="../assets/images/css3_icon.png" alt="" />
            </div>
            <div className="tech-icon">
                <img src="../assets/images/js_icon.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
