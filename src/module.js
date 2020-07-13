console.log('I\'m a module!')

async function start(){
    return await Promise.resolve('async working!')
}

start().then(console.log)