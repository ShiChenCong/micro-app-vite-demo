interface IProps {

}

const ViteChild: React.FC<IProps> = () => {
  return (
    <div>
      <micro-app
        iframe
        // disable-memory-router
        // inline
        // disableSandbox
        keep-alive
        name="scc-child"
        url="http://localhost:5174"
      ></micro-app>
      <div onClick={() => {
        window.history.pushState(null, '', '/main-about')
      }}>go to webpack child</div>
    </div >
  )
}

export default ViteChild
