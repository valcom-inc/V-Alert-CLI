const menus = {
    main: `
      valert [command] <options>

      send .............. Allows you to send a valert alert
      help ............... show help menu for a command`,

    send: `
      valert send <options>

      -c ..... V-Alert Channel
      -m ..... V-Alert Message
      -t ..... V-Alert Access Token
      --url ..... V-Alert Server URL`,
  }

  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]

    console.log(menus[subCmd] || menus.main)
  }