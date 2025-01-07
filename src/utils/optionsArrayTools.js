import { BasicOption } from 'src/formElementConstructors/Construsctors.js'

export function updateOptions (operate, target) {
  try {
    if (!Array.isArray(target)) throw new Error('The target you want to be updated is not Array.')
    if (operate) {
      target.push(new BasicOption())
    } else if (!operate && target.length > 1) {
      target.pop()
    }
  } catch {
    console.log('error, see above');
  }
}
