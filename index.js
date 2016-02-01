module.exports = function (main) {
  main = main || require.main
  if (isIISNode(main)) return handleIISNode(main)
  else return main.filename
}

function isIISNode (main) {
  return /\\iisnode\\/.test(main.filename)
}

function handleIISNode (main) {
  if (!main.children.length) {
    return main.filename
  } else {
    return main.children[0].filename
  }
}
