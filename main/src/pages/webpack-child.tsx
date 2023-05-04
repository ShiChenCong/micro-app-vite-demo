interface IProps {

}

const WebpackChild: React.FC<IProps> = () => {
  return (
    <div>
      <micro-app
        // iframe
        // disable-memory-router
        // inline
        // disableSandbox
        keep-alive
        name="scc-webpack-child"
        url="http://localhost:3000"
      ></micro-app>
    </div>
  )
}

export default WebpackChild
