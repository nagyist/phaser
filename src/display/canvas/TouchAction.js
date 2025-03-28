/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sets the touch-action property on the canvas style. Can be used to disable default browser touch actions.
 *
 * @function Phaser.Display.Canvas.TouchAction
 * @since 3.0.0
 *
 * @param {HTMLCanvasElement} canvas - The canvas element to have the style applied to.
 * @param {string} [value='none'] - The touch action value to set on the canvas. Set to `none` to disable touch actions.
 *
 * @return {HTMLCanvasElement} The canvas element.
 */
var TouchAction = function (canvas, value)
{
    if (value === undefined) { value = 'none'; }

    canvas.style['msTouchAction'] = value;
    canvas.style['ms-touch-action'] = value;
    canvas.style['touch-action'] = value;

    return canvas;
};

module.exports = TouchAction;
