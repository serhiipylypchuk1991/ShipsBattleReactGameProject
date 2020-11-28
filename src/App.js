
import React from "react";//Подключаем React библиотеку

import FildBattlePlayer from "./components/FildBattlePlayer/FildBattlePlayer.js";//Подключаем компонент FildBattlePlayer
import ShipsPort from "./components/ShipsPort/ShipsPort.js";//Подключаем компонент ShipsPort
import FildBattleRival from "./components/FildBattleRival/FildBattleRival.js";//Подключаем компонент FildBattleRival
import GameMenu from "./components/GameMenu/GameMenu.js";//Подключаем компонент GameMenu
import Statistic from "./components/Statistic/Statistic.js";//Подключаем компонент Statistic


import 'less';//Подключаем less препроцессор
import './less/app.less';//Подключаем стили less

import './css/removable_classes.css';//Подключаем стили css, так как less выдает ошибку на эти стили font-awesome.css
import './css/font-awesome.css';//Подключаем стили (шрифты) для кнопок GameMenu

import Controller from './components/MVC/Controller.js';//Подключаем Controller

class App extends Controller{
  constructor(props) {
    super(props);
    this.controller = this;
  }

  render() {

    return (

      <div id = 'GameRoom'>

        <FildBattlePlayer/>
        <ShipsPort/>
        <FildBattleRival/>
        <GameMenu/>
        <Statistic/>

      </div>

    );
  }

  //Запускает скрипты после рендеринга всего приложения
  componentDidMount() {
    this.controller.updateGameOnLoad();
  }

}
//export default - дает возможность использовать компонент App в других файлах
export default App;
