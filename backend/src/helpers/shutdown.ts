const shutdownHandler = (clearFunction) => {
  const handleClose = (signal) => {
    console.log(`${signal} received: closing service`)
    clearFunction()
  }
  
  process.on('SIGINT', handleClose)
  process.on('SIGTERM', handleClose)
}

export default shutdownHandler