const plugins = []

import pluginDebug from './debug'
plugins.push(pluginDebug)

import pluginAxios from './axios'
plugins.push(pluginAxios)

export default ({Vue}) => {
  plugins.forEach(plugin => plugin({ Vue }))
}
