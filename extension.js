// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode")

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let lastEditor

  let disposable = vscode.commands.registerCommand(
    "extension.vim_leave_insertmode",
    function () {
      // The code you place here will be executed every time your command is executed
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (lastEditor !== editor) {
          // vscode.commands.executeCommand("extension.vim_escape")
          vscode.commands.executeCommand("vscode-neovim.escape")
        }

        lastEditor = editor
      })
    }
  )
  context.subscriptions.push(disposable)

  vscode.commands.executeCommand("extension.vim_leave_insertmode")
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
