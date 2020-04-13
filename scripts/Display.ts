// @ts-check

/**
 * Экран для отображения результата.
 */
class Display
{
	private output: HTMLElement;
	/**
	 * Экран для отображения результата.
	 * 
	 * @param {HTMLElement} output Элемент для вывода результата.
	 */
	constructor( output: HTMLElement )
	{
		/** @type {HTMLElement} */
		this.output = output;
	}
	
	/**
	 * Устанавливает значение.
	 * 
	 * @param {string} value Новое значение.
	 */
	setValue( value: string )
	{
		this.output.textContent = value;
	}
	
	/**
	 * Подготавливает число к отображения на экране.
	 * 
	 * @param {number} number Число для отображения.
	 * @returns {string}
	 */
	prepare( number: number ): string
	{
		return number.toPrecision( 11 )
			.replace( /(?:\.0*|(\.\d+?)0*)$/, '$1' );
	}
}

export {
	Display as default,
};
