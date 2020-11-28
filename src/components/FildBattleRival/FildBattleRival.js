import React from 'react';//Подключаем React библиотеку

import Controller from '../MVC/Controller.js';//Подключаем Controller

import RivalCell from './components/RivalCell.js';//Подключаем RivalCell компонент

 //Создаем компонент FildBattleRival который будет отображать поле оппонента
 class FildBattleRival extends Controller{
	constructor(props) {
		super(props);
    this.playerClickHandler = this.playerShotHandler.bind(this);
	}

	   //Метод отображения информации
     render(){

        return(
            <div id = 'FildBattleRival'>

                {
                  //Выводит на экран ячейки для поля игрока
                  this.model.cellsCountArray(63).map((i) => {return (

                    <RivalCell

                      cell_className = {'cell'}
                      cell_val = {i}
                      key = {i}

                      playerClickHandler = {this.playerClickHandler}

                    />

                  )})
                }

            </div>
        );

      }
}

//export default - дает возможность использовать компонент FildBattleRival в других файлах
export default FildBattleRival;
