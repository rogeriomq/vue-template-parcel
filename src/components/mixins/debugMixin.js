function log (type, ...args) {
  // console.log('this.$options=', this.$options.debug)
  if (this.$options.debug) {
    // console[type](`%c[${this.$_id}]${formatTime(Date.now())}>>`,
    console[type](`%c[${this.$_id}]>>`,
      `background:${type === 'log' ? '#384A5E' : type === 'warn' ? '#F1BF39' : '#FF5370'}; padding: 3px; border-radius: 3px;  color: #fff`,
      ...args,
      this.$el
    )
  }
}

export default {
  created () {
    this.$_id = `${this.$options.name}-${(Date.now()).toString(32)}`
    if (this.$options.debug) console.log('DEBUG ON')
  },
  methods: {
    log (...args) {
      log.call(this, 'log', ...args)
    },
    warn (...args) {
      log.call(this, 'warn', ...args)
    },
    err (...args) {
      log.call(this, 'error', ...args)
    }
  }
}
