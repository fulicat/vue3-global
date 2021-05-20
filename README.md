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

