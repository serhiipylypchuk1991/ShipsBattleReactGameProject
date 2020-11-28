import React from 'react';//Подключаем React библиотеку

 //Создаем компонент ButtonComponent который будет отображать кнопки в меню
 class ButtonComponent extends React.Component{
	constructor(props) {
		super(props);

    this.button_className = this.props.button_className;
    this.i1_className = this.props.i1_className;
    this.i2_className = this.props.i2_className;
    this.button_name = this.props.button_name;
    //this.disabled = this.props.disabled;disabled = {this.disabled}

    this.ButtonHandler = this.props.ButtonHandler;

	}

	   //Метод отображения информации
     render(){

        return(
          <button className = {this.button_className}
            onClick = {(e)=>{
              this.ButtonHandler(e);
            }}
          >
    				<span className = 'fa-stack fa-fw'>
    					<i className = {this.i1_className}></i>
    					<i className = {this.i2_className}></i>
    				</span>	{this.button_name}
          
    			</button>
        );

      }
}

//export default - дает возможность использовать компонент ButtonComponent в GameMenu
export default ButtonComponent;