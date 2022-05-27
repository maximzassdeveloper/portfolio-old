import { Main } from '@/components/hoc'
import { FC, useEffect } from 'react'
import { init } from './three'

export const Home: FC = () => {

  useEffect(() => {
    const selector = document.querySelector('.webgl')
    init(selector)
  }, [])

  return (
    <Main>
      <section id="first" className="first" data-scroll-section data-scroll-section-inview>
        <div className="container">

          <div className="first-content">
            <h1 className="first__title text-anim" data-scroll data-scroll-speed="2">
              <div className="line">Привет, я <span>Максим Засс</span></div>
              <div className="line">— <span>UI/UX</span> дизайнер</div>
              <div className="line">и <span>frontend</span>-разработчик<br /></div>
            </h1>
          </div>

          <div data-hash="#about" className="first-arrow arrow" data-scroll data-scroll-speed="2">
            <img src="assets/img/arrow-icon.svg" alt="Arrow" />
          </div>

        </div>
        <canvas className="webgl"></canvas>
      </section>

      <section className="about" id="about" data-scroll-section>
        <div className="container">

          <h2 className="title split-text" data-scroll>Обо мне</h2>

          <div className="about-content">

            <p className="about-text about-text1 split-text" data-scroll data-scroll-speed="-1">
              Занимаюсь веб-разработкой <br />
              более 3-х лет. Работал с <br />
              WordPress, React, Node js, Tilda.
            </p>

            <div className="image about-image1 plane" data-scroll data-scroll-speed="2">
              <img src="assets/img/me1.jpg" alt="Максим Засс первое фото" />
            </div>

            <div className="image about-image2" data-scroll data-scroll-speed="1">
              <img src="assets/img/me2.jpg" alt="Максим Засс второе фото" />
            </div>

            <p className="about-text about-text2 split-text" data-scroll data-scroll-speed="2">
              Для меня важно, чтобы сайт был <br />
              максимально удобным, лёгким и  <br />
              эстетичным. Сайт должен <br />
              приносить пользу и помогать <br />
              решать проблемы клиентов.
            </p>

            <p className="about-text about-text3 split-text" data-scroll data-scroll-speed="3">
              Также я большое внимание <br />
              уделяю анимациям и <br />
              wow-эффектам, из-за которых <br />
              ваши потенциальные клиенты <br />
              не захотят покидать страницу.
            </p>

          </div>

        </div>
      </section>

      <section className="works" id="works" data-scroll-section>

        <div className="container">
          <h2 className="title split-text" data-scroll>Проекты</h2>
        </div>

      </section>

      <section className="contact" id="contact" data-scroll-section>
        <div className="container">

          <div className="contact-info">
            <h2 className="title split-text" data-scroll>Контакты</h2>

            <div data-hash="#first" className="contact-arrow arrow" data-scroll>
              <img src="assets/img/arrow-icon.svg" alt="Arrow" />
            </div>
          </div> 

          <div className="contact-form form">
            <h2 className="title split-text" data-scroll>Оставить заявку</h2>
            <form action="">

              <div className="form-line">
                <div className="input">
                  <input name="name" type="text" required autoComplete="off" />
                  <label>Ваше имя</label>
                </div>

                <div className="input">
                  <input name="connect" type="text" required autoComplete="off" />
                  <label>Телеграм / телефон / почта</label>
                </div>
              </div>

              <div className="input">
                <textarea name="comment" required autoComplete="off"></textarea>
                <label>Ваш комментарий</label>
              </div>

              <button type="submit" className="button">Отправить</button>
              <p className="form__text">Нажимая на кнопку, вы даете согласие на обработку <a className="link">персональных данных</a> и
                соглашаетесь c <a className="link">политикой конфиденциальности</a></p>

            </form>
          </div>

        </div>
      </section>

    </Main>
  )
}