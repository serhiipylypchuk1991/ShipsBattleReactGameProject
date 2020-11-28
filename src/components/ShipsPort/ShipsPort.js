import React from 'react';//Подключаем React библиотеку

import $ from 'jquery';//Подключаем библиотеку jquery

import Controller from '../MVC/Controller.js';//Подключаем Controller

import Ship from '../images/ship.png';//Подключаем изображение корабля

 //Создаем компонент ShipsPort который будет отображать корабли
 class ShipsPort extends Controller{

   //Подключает виджет draggable
   componentDidMount() {
     this.$node = $(this.refs.draggable);
     this.makeDraggable(this.$node);
   }

   //Метод отображения информации
   render(){
      return(

        <div id = 'ShipsPort'>

            {
              //Выводит на корабли в контейнер порта
              this.model.shipsCountArray(this.model.ships_amount).map((i) => {return (
                <div key = {i}>
                
                  <img  className = 'ship' num = {'' + i} src = {Ship} title = {'ship '+ (i+1)} alt = {'ship ' + (i+1)} />

                </div>
              )})
            }

        </div>

      );
    }

    //Отключает виджет draggable
    componentWillUnmount() {
      this.$node.draggable("destroy");
    }

}




//export default - дает возможность использовать компонент ShipsPort в других файлах
export default ShipsPort;