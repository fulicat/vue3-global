# vue3-global
vue3 global property、component、directive、filter



---------

"devDependencies": {
    "vue": "^3.0.5"
  }

------





1. vue3

```javascript
// main.js
import { createApp } from 'vue'
import global from 'vue3-global'
import App from './App.vue'

import filters from './utils/filters'
import http from './utils/http'
import Toast from './plugins/toast'
import Tooltip from './plugins/tooltip'

const app = createApp(App)
app.use(global, {
	filter: filters,
	property: {
		$http: http,
		$toast: Toast,
		$tooltip: Tooltip,
	}
})

/*
app.use(global)
app.global.filter(filters)
app.global.component(component)
app.global.directive(directive)
app.global.property({
	$http: http,
	$toast: Toast,
	$tooltip: Tooltip,
})
*/


/*app.use(global)
app.global('filter', filters)
app.global('component', component)
app.global('directive', directive)
app.global('property', {
	$http: http,
	$toast: Toast,
	$tooltip: Tooltip,
})*/
app.mount('#app')




// App.vue or other component
this.$toast('vue3-global')
this.$tooltip
this.$http
```



2. createApp 、mount like vue2

```javascript
// main.js

// createApp like vue2
import global, { createApp } from 'vue3.global'
import App from './App.vue'

import filters from './utils/filters'
import http from './utils/http'
import Toast from './plugins/toast'
import Tooltip from './plugins/tooltip'

const app = createApp(App)
app.use(global, {
	filter: filters,
	property: {
		$http: http,
		$toast: Toast,
		$tooltip: Tooltip,
	}
})

/*
app.use(global)
app.global.filter(filters)
app.global.component(component)
app.global.directive(directive)
app.global.property({
	$http: http,
	$toast: Toast,
	$tooltip: Tooltip,
})
*/


/*app.use(global)
app.global('filter', filters)
app.global('component', component)
app.global('directive', directive)
app.global('property', {
	$http: http,
	$toast: Toast,
	$tooltip: Tooltip,
})*/

// mount like vue2
app.mount('#app')





// App.vue or other component
this.$toast('vue3-global')
this.$tooltip
this.$http
```







## License

(The MIT License)

Copyright (c) 2013 Jack.Chan <fulicat@qq.com> (http://fulicat.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
