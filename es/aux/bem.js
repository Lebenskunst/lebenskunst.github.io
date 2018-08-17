'use strict'

/**
 * BEM helper function; allows to construct a BEM class.
 * @param  {string} block Block name
 * @return {Object}       Object with functions
 *
 * Example:
 * bem('a').element('b').modifier('c'); => a__b--c
 *
 * @flow
 */
const bem: Function = function bem (block: string) {
  let initial: {
    value: string
  } = {
    value: block
  }

  return Object.create(
    initial,
    {
      element: {

        /**
         * Set elements name.
         *
         * @param {string} e Element name as string.
         *
         * @return {Object} Return self.
         */
        value: function element (e: string): Object {
          this.value += `__${e}`
          return this
        }
      },
      modifier: {

        /**
         * Set modifier of selector.
         *
         * @param {string} m Modifier's name.
         *
         * @return {Object} Return self.
         */
        value: function modifier (m: string): Object {
          this.value += `--${m}`
          return this
        }
      },
      get: {

        /**
         * Get HTMLCollection of class name.
         *
         * @param {HTMLDocument|HTMLElement} Define the operation's context. If
         * no context ist given, the HTMLdocument is used.
         *
         * @return {HTMLCollection} List of items.
         */
        value: function get (context: HTMLElement = global.document) {
          return context.getElementsByClassName(this.value)
        }
      },
      toString: {

        /**
         * toString-Method
         *
         * @return {string} Current value.
         */
        value: function toString () {
          return this.value
        }
      }
    }
  )
}

export default bem
