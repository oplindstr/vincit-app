/**
 * Function to handle application shutdown
 */

const shutdownHandler = (clearFunction: () => void): void => {
  const handleClose = (signal: string): void => {
    console.log(`${signal} received: closing service`)
    clearFunction()
  }
  process.on('SIGINT', handleClose)
  process.on('SIGTERM', handleClose)
}

export default shutdownHandler
