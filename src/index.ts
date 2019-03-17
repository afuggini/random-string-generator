import generate from 'nanoid/generate'

export const alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export default (numberOfChars, allowedCharacters = alphanumeric) => generate(allowedCharacters, numberOfChars)
