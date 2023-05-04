import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>webpack Hello World</h1>
      {/* <div onClick={() => {
        navigate('/about')
        // window.history.pushState('/about')
      }}>About Us</div> */}
    </div>
  )
}

export default Home
