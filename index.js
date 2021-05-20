/*
* vue3-global
* @Author: Jack.Chan
* @Date:   2021-05-17 19:32:26
* @Last Modified by:   Jack.Chan
* @Last Modified time: 2021-05-20 18:34:24
*/
import { createApp as _createApp } from 'vue'

export const typeOf = (obj) => {
	const reg = /^\[object (\w+)\]$/g
	let result = Object.prototype.toString.call(obj)
	if (reg.test(result)) {
		result = result.replace(reg, '$1').trim()
	} else {
		result = typeof(obj)
		result = result.substring(0, 1).toUpperCase() + result.substring(1)
	}
	return result
}

export const createApp = (...args) => {
	const app = _createApp(...args)
	const _mount = app.mount
	app.mount = (containerOrSelector) => {
		const container = typeof(containerOrSelector) === 'string' ? document.querySelector(containerOrSelector) : (typeof(containerOrSelector) === 'object' ? containerOrSelector : undefined)
		if (!container) {
			console.error(`[error]: `)
      		return;
		}
		_mount(container)
		container.parentNode.replaceChild(container.childNodes[0], container)
		return container
	}
	return app
}


export const Filter = function(app, filters) {
	if (app && app.config && app.config.globalProperties) {
		if (typeOf(filters) === 'Object') {
			for (const key in filters) {
				app.config.globalProperties[key] = filters[key]
			}
		} else {
			console.error(`[error]: filters is not an object =>`, filters)
		}
	} else {
		console.error(`[error]: app is undefined =>`, app)
	}
}

export const Property = function(app, properties) {
	if (app && app.config && app.config.globalProperties) {
		if (typeOf(properties) === 'Object') {
			for (const key in properties) {
				app.config.globalProperties[key] = properties[key]
			}
		} else {
			console.error(`[error]: properties is not an object =>`, properties)
		}
	} else {
		console.error(`[error]: app is undefined =>`, app)
	}
}

export const Component = function(app, components) {
	if (app && app.config && app.component) {
		if (typeOf(components) === 'Array') {
			components.forEach((item) => app.component(item.name, item))
		} else {
			console.error(`[error]: components is not an array =>`, components)
		}
	} else {
		console.error(`[error]: app is undefined =>`, app)
	}
}

export const Directive = function(app, directives) {
	if (app && app.config && app.directive) {
		if (typeOf(directives) === 'Array') {
			directives.forEach((item) => app.directive(item.name, item))
		} else {
			console.error(`[error]: directives is not an array =>`, directives)
		}
	} else {
		console.error(`[error]: app is undefined =>`, app)
	}
}


const Global = function(app, options) {
	
	if (app && app.config) {
		this.app = app

		const defaultOptions = {
			filter: void 0,
			property: void 0,
			component: void 0,
			directive: void 0,
		}
		options = Object.assign({}, defaultOptions, options)
		if (options.filter) {
			Filter(this.app, options.filter)
		}
		if (options.property) {
			Property(this.app, options.property)
		}
		if (options.component) {
			Component(this.app, options.component)
		}
		if (options.directive) {
			Directive(this.app, options.directive)
		}

		return (type, options) => {
			switch (type) {
				case 'filter':
					Filter(app, options)
					break;
				case 'property':
					Property(app, options)
					break;
				case 'component':
					Component(app, options)
					break;
				case 'directive':
					Directive(app, options)
					break;
				default:
					console.error(`unknow type (${type})`)
					break;
			}
		}
	} else {
		console.error(`[error]: app is undefined =>`, app)
	}
}


export default {
	install: (app, options) => {
		if (app && app.config) {
			if (app.global) {
				console.warn(`[warn]: app.global is already is exists`)
			} else {
				app.global = (type, options) => {
					const newOptions = {...options}
					if (type && typeOf(type) === 'String') {
						newOptions[type] = options || {}
					} 
					return new Global(app, newOptions)
				}
				app.global.filter = (options) => {
					Filter(app, options)
					return app
				}
				app.global.property = (options) => {
					Property(app, options)
					return app
				}
				app.global.component = (options) => {
					Component(app, options)
					return app
				}
				app.global.directive = (options) => {
					Directive(app, options)
					return app
				}
				if (typeOf(options) === 'Object') {
					app.global(app, options)
				}
			}

			return app
		} else {
			console.error(`[error]: app is undefined =>`, app)
		}
	}
}