/**
 * Vitest global setup file.
 *
 * Provides a lightweight Canvas mock for jsdom, which does not implement
 * HTMLCanvasElement.getContext natively. This allows Phaser source files
 * that reference the Canvas API to be imported without throwing.
 *
 * The mock returns a stub 2D context with no-op methods — sufficient for
 * unit testing logic that touches canvas but not for visual/rendering tests.
 */

if (typeof HTMLCanvasElement !== 'undefined')
{
    var origGetContext = HTMLCanvasElement.prototype.getContext;

    HTMLCanvasElement.prototype.getContext = function (type)
    {
        if (type === '2d' || type === '2D')
        {
            return {
                canvas: this,
                fillRect: function () {},
                clearRect: function () {},
                getImageData: function (x, y, w, h)
                {
                    return { data: new Array(w * h * 4).fill(0) };
                },
                putImageData: function () {},
                createImageData: function (w, h) { return { data: new Array(w * h * 4).fill(0) }; },
                setTransform: function () {},
                resetTransform: function () {},
                drawImage: function () {},
                save: function () {},
                fillText: function () {},
                restore: function () {},
                beginPath: function () {},
                moveTo: function () {},
                lineTo: function () {},
                closePath: function () {},
                stroke: function () {},
                fill: function () {},
                translate: function () {},
                scale: function () {},
                rotate: function () {},
                arc: function () {},
                arcTo: function () {},
                rect: function () {},
                clip: function () {},
                quadraticCurveTo: function () {},
                bezierCurveTo: function () {},
                measureText: function (text) { return { width: text ? text.length * 6 : 0 }; },
                createLinearGradient: function () { return { addColorStop: function () {} }; },
                createRadialGradient: function () { return { addColorStop: function () {} }; },
                createPattern: function () { return {}; },
                transform: function () {},
                globalAlpha: 1,
                globalCompositeOperation: 'source-over',
                fillStyle: '#000000',
                strokeStyle: '#000000',
                lineWidth: 1,
                lineCap: 'butt',
                lineJoin: 'miter',
                miterLimit: 10,
                shadowBlur: 0,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                font: '10px sans-serif',
                textAlign: 'start',
                textBaseline: 'alphabetic',
                direction: 'ltr',
                imageSmoothingEnabled: true
            };
        }

        if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl')
        {
            return {
                canvas: this,
                getExtension: function () { return null; },
                getParameter: function () { return 0; },
                createBuffer: function () { return {}; },
                createFramebuffer: function () { return {}; },
                createProgram: function () { return {}; },
                createRenderbuffer: function () { return {}; },
                createShader: function () { return {}; },
                createTexture: function () { return {}; },
                bindBuffer: function () {},
                bindFramebuffer: function () {},
                bindRenderbuffer: function () {},
                bindTexture: function () {},
                blendFunc: function () {},
                bufferData: function () {},
                clear: function () {},
                clearColor: function () {},
                compileShader: function () {},
                deleteBuffer: function () {},
                deleteFramebuffer: function () {},
                deleteProgram: function () {},
                deleteRenderbuffer: function () {},
                deleteShader: function () {},
                deleteTexture: function () {},
                disable: function () {},
                enable: function () {},
                drawArrays: function () {},
                drawElements: function () {},
                enableVertexAttribArray: function () {},
                framebufferTexture2D: function () {},
                getAttribLocation: function () { return 0; },
                getProgramParameter: function () { return true; },
                getShaderParameter: function () { return true; },
                getUniformLocation: function () { return {}; },
                linkProgram: function () {},
                pixelStorei: function () {},
                shaderSource: function () {},
                texImage2D: function () {},
                texParameteri: function () {},
                uniform1f: function () {},
                uniform1i: function () {},
                uniform2f: function () {},
                uniform3f: function () {},
                uniform4f: function () {},
                uniformMatrix3fv: function () {},
                uniformMatrix4fv: function () {},
                useProgram: function () {},
                vertexAttribPointer: function () {},
                viewport: function () {},
                scissor: function () {},
                activeTexture: function () {},
                ARRAY_BUFFER: 34962,
                ELEMENT_ARRAY_BUFFER: 34963,
                STATIC_DRAW: 35044,
                FLOAT: 5126,
                UNSIGNED_SHORT: 5123,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                NEAREST: 9728,
                LINEAR: 9729,
                TEXTURE_2D: 3553,
                RGBA: 6408,
                UNSIGNED_BYTE: 5121,
                BLEND: 3042,
                DEPTH_TEST: 2929,
                STENCIL_TEST: 2960,
                SCISSOR_TEST: 3089,
                TEXTURE0: 33984,
                FRAMEBUFFER: 36160,
                COLOR_ATTACHMENT0: 36064,
                COLOR_BUFFER_BIT: 16384,
                DEPTH_BUFFER_BIT: 256,
                STENCIL_BUFFER_BIT: 1024,
                MAX_TEXTURE_SIZE: 3379,
                MAX_TEXTURE_IMAGE_UNITS: 34930,
                drawingBufferWidth: 800,
                drawingBufferHeight: 600
            };
        }

        // Fall back to original (returns null in jsdom)
        if (origGetContext)
        {
            return origGetContext.call(this, type);
        }

        return null;
    };
}
