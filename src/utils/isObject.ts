function isObject(target: unknown): target is Record<string, any> {
  if (typeof target === 'object' && !Array.isArray(target) && target !== null) {
    return true
  }

  return false
}

export { isObject }
