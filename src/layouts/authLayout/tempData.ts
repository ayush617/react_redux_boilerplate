export function getUser(callback: (a: any) => {}) {
  setTimeout(() => {
    callback({ userName: 'vishal' })
  }, 500)
}