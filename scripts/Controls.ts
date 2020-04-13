// @ts-check

 // @typedef { (  ).default } 

//import Calculator from '.';
//type Calculator = import( './Calculator' ).default;
import type Calculator from './Calculator';
/**
 * Элементы управления калькулятором.
 */
class Controls
{
	private calculator: Calculator;
	public buttons: NodeList;
	/**
	 * Элементы управления калькулятором.
	 * 
	 * @param {Calculator} calculator Связанный калькулятор.
	 * @param {NodeList} buttons Элементы управления.
	 */
	constructor( calculator: Calculator, buttons: NodeList )
	{
		/** @type {Calculator} */
		this.calculator = calculator;
		/** @type {NodeList} */
		this.buttons = buttons;
		
		/**
		 * @param {Event} event 
		 */
		const onButtonClick = ( event:Event ) =>
		{
			const target =  event.target as HTMLButtonElement;
			const action = target.dataset.action as string;
			const value = target.dataset.value as string;
			this.doAction( action, value );
		}
		
		for ( const button of buttons )
		{
			button.addEventListener( 'click', onButtonClick );
		}
	}
	
	/**
	 * Выполняет указанное действие.
	 * 
	 * @param {string} action Выполняемое действие.
	 * @param {string} [value] Значение для действия.
	 */
	doAction( action: string, value: string )
	{
		switch ( action )
		{
			case 'addition':
				this.calculator.addition();
				break;
			
			case 'subtraction':
				this.calculator.subtraction();
				break;
			
			case 'multiplication':
				this.calculator.multiplication();
				break;
			
			case 'division':
				this.calculator.division();
				break;
			
			case 'square-root':
				this.calculator.squareRoot();
				break;
			
			case 'digit':
				if ( !value )
				{
					throw new Error( 'Digit action should be with value' );
				}
				this.calculator.addDigit( value );
				break;
			
			case 'period':
				this.calculator.period();
				break;
			
			case 'change-sign':
				this.calculator.changeSign();
				break;
			
			case 'calculate':
				this.calculator.calculate();
				break;
			
			case 'backspace':
				this.calculator.backspace();
				break;
			
			case 'clear':
				this.calculator.clear();
				break;
			
			default:
				throw new Error( 'Unknown action' );
		}
	}
}

export {
	Controls as default,
};
