import React from 'react';//Подключаем React библиотеку

 //Создаем компонент RivalCell который будет отображать ячейки противника
 class RivalCell extends React.Component{
	constructor(props) {
		super(props);

    this.cell_className = this.props.cell_className;
    this.cell_val = this.props.cell_val;

    this.playerClickHandler = this.props.playerClickHandler;

	}

	   //Метод отображения информации
     render(){

        return(

            <div
              className = {this.cell_className}
              val = {this.cell_val}

              onClick = {(e)=>{
                this.playerClickHandler(e);
              }}

            >
            </div>

        );

      }
}

//export default - дает возможность использовать компонент RivalCell в других файлах
export default RivalCell;
