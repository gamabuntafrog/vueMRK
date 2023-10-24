export const localStorageMixin = {
  methods: {
    saveToLocalStorage(key, data) {
      try {
        const serializedData = JSON.stringify(data)
        localStorage.setItem(key, serializedData)

        return true
      } catch (e) {
        console.error(e)
      }
    },
    getFromLocalStorage(key, defaultValue = null) {
      try {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : defaultValue
      } catch (e) {
        console.error(e)
      }
    },
    removeFromLocalStorage(key) {
      try {
        localStorage.removeItem(key)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
