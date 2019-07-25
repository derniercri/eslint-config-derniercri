// bad
function badNewlineBeforeReturn() {
  const a = 2 + 3
  return a
}

// good
function goodNewlineBeforeReturn() {
  const a = 2 + 3

  return a
}
