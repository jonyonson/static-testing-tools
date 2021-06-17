function add(a: number, b: number): number {
  return a + b
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function something() {
  console.log('sa')
}

interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}
function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join(' ')
}

add(1, 2)

getFullName({name: {first: 'Joe', middle: 'Bud', last: 'Matthews'}})
