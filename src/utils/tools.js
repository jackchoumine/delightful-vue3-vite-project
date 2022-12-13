export function copyToClipboard(text) {
  const input = document.createElement('input')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  input.select()
  const result = document.execCommand('copy')
  document.body.removeChild(input)
  return result
}

export function copyText(data = '', success = () => undefined, fail = () => undefined) {
  const clipboard = navigator.clipboard
  if (clipboard) {
    clipboard.write(data).then(success).catch(fail)
    return true
  }
  // NOTE 使用 input 难以调整复制文本的格式，比如换行
  const textarea = document.createElement('textarea')
  textarea.value = typeof data === 'string' ? data.trim() : ''
  document.body.appendChild(textarea)
  textarea.select()
  let result = false
  try {
    result = document.execCommand('Copy')
    success()
  } catch (error) {
    fail(error)
  }
  document.body.removeChild(textarea)
  return result
}
