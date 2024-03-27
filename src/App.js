import "./App.css";
import React from "react";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="header-images">
            <div className="logotip">
              <img
                src="./img/main-menu.png"
                alt=""
                width="30px"
                height="20px"
                className="menu-block"
              />
            </div>
            <img
              src="./img/tube-logo.svg"
              alt=""
              width="40px"
              height="40px"
              className="tube-logo-block"
            />
            <h2>YouTube</h2>
          </div>
          <div className="header-search-block">
            <div className="input_block">
              <input type="text" placeholder="Введите запрос" />
              <div className="search_icon">
                <img src="./img/search_icon.svg" alt="" width="25px" />
              </div>
            </div>
            <div className="microphone_icon">
              <img
                src="./img/microphone_icon.ico"
                alt=""
                width="18px"
                height="20px"
              />
            </div>
          </div>
          <div className="my_profile_block">
            <div className="create_block"></div>
            <div className="sms_block"></div>
            <div className="my_profile_photo_block">
              <img
                id="img"
                draggable="false"
                className="style-scope yt-img-shadow"
                alt="Фото профиля"
                height="32"
                width="32"
                src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
              />
            </div>
          </div>
        </header>
        <main>
          <div className="first_main_block">
            <div className="main_rooms">
              <div className="my-first-room room">
                <p>Главная</p>
              </div>
              <div className="my-second-room room">
                <p>Shorts</p>
              </div>
              <div className="my-third-room room">
                <p>Подписки</p>
              </div>
              <div className="my-fifth-room room">
                <p>Мой канал</p>
              </div>
              <div className="my-six-room room">
                <p>Скачанные</p>
              </div>
            </div>
            <div className="main_home_icon first home">
              <p>Главная</p>
            </div>
            <div className="main_home_icon second">
              <p>Shorts</p>
            </div>
            <div className="main_home_icon third">
              <p>Подписки</p>
            </div>

            <div className="my_rooms">
              <h3>Вы</h3>
              <div className="main_home_icon fourth">
                <p>Мой канал</p>
              </div>
              <div className="main_home_icon">
                <p>История</p>
              </div>
              <div className="main_home_icon">
                <p>Ваши видео</p>
              </div>
              <div className="main_home_icon">
                <p>Смотреть позже</p>
              </div>
              <div className="main_home_icon fifth">
                <p>Скачанные</p>
              </div>
              <div className="main_home_icon">
                <p>Понравившиеся</p>
              </div>
            </div>

            <div className="my_rooms second_room">
              <h3>Подписки</h3>
              <div className="main_home_icon">
                <img
                  id="img"
                  draggable="false"
                  className="style-scope yt-img-shadow"
                  alt="Фото профиля"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
                />
                <p>Footbal Tv</p>
              </div>
              <div className="main_home_icon">
                <img
                  id="img"
                  draggable="false"
                  className="style-scope yt-img-shadow"
                  alt="Фото профиля"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
                />
                <p>LFC</p>
              </div>
              <div className="main_home_icon">
                <img
                  id="img"
                  draggable="false"
                  className="style-scope yt-img-shadow"
                  alt="Фото профиля"
                  Name
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
                />
                <p>Pubg Mobile</p>
              </div>
              <div className="main_home_icon">
                <img
                  id="img"
                  draggable="false"
                  className="style-scope yt-img-shadow"
                  alt="Фото профиля"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
                />
                <p>Front-end</p>
              </div>
              <div className="main_home_icon">
                <img
                  id="img"
                  draggable="false"
                  className="style-scope yt-img-shadow"
                  alt="Фото профиля"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
                />
                <p>Back-end</p>
              </div>
              <div className="main_home_icon">
                <img
                  id="img"
                  draggable="false"
                  className="style-scope yt-img-shadow"
                  alt="Фото профиля"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/V9HMf5mjznTT-d60CXCBYbvfuHQHjGxILzAN6rNwpE1nY1Bil-rxXpaPy9vOx8uYmYGqLF_UHw=s88-c-k-c0x00ffffff-no-rj"
                />
                <p>App Designer</p>
              </div>
            </div>

            <div className="my_rooms third_room">
              <div className="main_home_icon">
                <p>Настройки</p>
              </div>
              <div className="main_home_icon">
                <p>Жалобы</p>
              </div>
              <div className="main_home_icon">
                <p>Справка</p>
              </div>
              <div className="main_home_icon">
                <p>Отправить отзыв</p>
              </div>
            </div>
          </div>

          <div className="second_main_block">
            <div className="header_of_second_main_block">
              <div className="categories">
                <p>Все</p>
              </div>
              <div className="categories">
                <p>Видеоигры</p>
              </div>
              <div className="categories">
                <p>Музыка</p>
              </div>
              <div className="categories">
                <p>Новое</p>
              </div>
              <div className="categories">
                <p>Классика</p>
              </div>
              <div className="categories">
                <p>Топ</p>
              </div>
              <div className="categories">
                <p>Юмор</p>
              </div>
            </div>
            <Work />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
