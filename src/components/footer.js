import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__body">
          <div className="footer__titles">
            <h1 className="footer__title">BexaShop</h1>
            <div className="footer__text-body">
              <h1 className="footer__text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </h1>
              <h1 className="footer__text-1">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </h1>
              <div className="footer__icons">
                <a href="tel:+998909125646" target="_blank" rel="noopener noreferrer">
                  <img
                    className="footer__icon"
                    src="/telegram.png"
                    alt="Telegram"
                  />
                </a>
                <a href="tel:+998909125646" target="_blank" rel="noopener noreferrer">
                  <img
                    className="footer__icon"
                    src="/calling.png"
                    alt="Call"
                  />
                </a>
                <a href="tel:+998909125646" target="_blank" rel="noopener noreferrer">
                  <img
                    className="footer__icon"
                    src="/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__sertificates">
            <p className="footer__one">© 2025 ООО «BexaShop»</p>
            <p className="footer__two">
              Образовательные услуги оказываются в соответствии с Федеральным
              законом от 04.05.2011 № 99-ФЗ «О лицензировании отдельных видов
              деятельности».
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
