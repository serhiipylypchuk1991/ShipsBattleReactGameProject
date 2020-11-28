import React from 'react';//Подключаем React библиотеку

import Controller from '../MVC/Controller.js';//Подключаем Controller



 //Создаем компонент Statistic который будет отображать статистику игры
 class Statistic extends Controller{

	   //Метод отображения информации
     render(){

        return(
            <div className = 'statistic'>

                <p className = "my_resolt">

                  <i className = "fa fa-user fa-lg" ></i>
                  <span>попадания:</span>	<span className = 'my_hits'>0</span>
                  <span>промахи:</span>	<span className = 'my_misses'>0</span>
                  <span>потери:</span>	<span className = 'my_losses'>0</span>

                </p>

                <p className = "op_resolt">

                  <i className = "fa fa-android fa-lg" ></i>
                  <span>попадания:</span>	<span className = 'op_hits'>0</span>
                  <span>промахи:</span>	<span className = 'op_misses'>0</span>
                  <span>потери:</span>	<span className = 'op_losses'>0</span>

                </p>

            </div>
        );

      }
}

//export default - дает возможность использовать компонент Statistic в других файлах
export default Statistic;
