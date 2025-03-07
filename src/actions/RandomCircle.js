/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Random = require('../geom/circle/Random');

/**
 * Takes an array of Game Objects and positions them at random locations within the Circle.
 * 
 * If you wish to pass a `Phaser.GameObjects.Circle` Shape to this function, you should pass its `geom` property.
 *
 * @function Phaser.Actions.RandomCircle
 * @since 3.0.0
 *
 * @generic {Phaser.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Phaser.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Phaser.Geom.Circle} circle - The Circle to position the Game Objects within.
 *
 * @return {(array|Phaser.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var RandomCircle = function (items, circle)
{
    for (var i = 0; i < items.length; i++)
    {
        Random(circle, items[i]);
    }

    return items;
};

module.exports = RandomCircle;
