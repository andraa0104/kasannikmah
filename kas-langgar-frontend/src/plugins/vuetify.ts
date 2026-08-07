import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        colors: {
          primary: '#1E88E5', // Deep Blue
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#E53935', // Ruby Red
          info: '#2196F3',
          success: '#43A047', // Emerald Green
          warning: '#FFC107',
          background: '#121212',
          surface: '#1E1E1E'
        }
      },
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#C62828', // Darker red for light theme
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#F5F7FA',
          surface: '#FFFFFF'
        }
      }
    }
  }
})
