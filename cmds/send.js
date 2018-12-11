const axios = require('axios')
const ora = require('ora')

module.exports = async (args) => {
    const spinner = ora('Sending Alert').start()
    spinner.color = 'cyan'
    const channels = []
    if (args.c === true) {
        return spinner.warn(['Looks as if you passed back -c however did not pass back a string'])
    } else if (args.c === false) {return spinner.warn(['Looks as if you didnt pass back -c which is required'])}

    if (args.c) {
        channels.push(args.c)
    }

    if (args.m === true) {
       return spinner.warn(['Looks as if you passed back -m however did not pass back a string'])
    } else if (args.m === false) {return spinner.warn(['Looks as if you didnt pass back -m which is required'])}

    if (args.url === true) {
        return spinner.warn(['Looks as if you passed back --url however did not pass back a string'])
    } else if (args.url === false) {return spinner.warn(['Looks as if you didnt pass back --url which is required'])}

    if (args.t === true) {
        return spinner.warn(['Looks as if you passed back -t however did not pass back a string'])
    } else if (args.t === false) {return spinner.warn(['Looks as if you didnt pass back -t which is required'])}


    const config = { headers: { Authorization: `Basic ${args.t}` } };
    axios.post(`${args.url}`, {
        channels,
        message: args.m
      }, config)
      .then((response) => {
        spinner.succeed([JSON.stringify(response.data)])
      })
      .catch((error) => {
        spinner.fail([error])
      });
}