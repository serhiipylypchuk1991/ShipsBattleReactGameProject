import React from 'react';//Подключаем React библиотеку

import $ from 'jquery';//Подключаем jquery библиотеку
import 'jquery-ui/ui/widgets/droppable.js';

import Controller from '../MVC/Controller.js';//Подключаем Controller

 //Создаем компонент FildBattlePlayer который будет отображать поле игрока
 class FildBattlePlayer extends Controller{

   //Подключает виджет droppable
   componentDidMount() {
     this.$node = $(this.refs.droppable);
     this.makeDroppable(this,this);
   }

    //Метод отображения информации
    render(){

      return(//Отображает компонент
          <div id = 'FildBattlePlayer'>

              {
                //Выводит на экран ячейки для поля игрока
                this.model.cellsCountArray(63).map((i) => {return (<div className = 'cell' val = {i} key = {i}></div>)})
              }

          </div>
      );

    }

    //Отключает виджет droppable
    componentWillUnmount() {
        this.$node.droppable('destroy');
    }

}

//export default - дает возможность использовать компонент FildBattlePlayer в других файлах
export default FildBattlePlayer;
