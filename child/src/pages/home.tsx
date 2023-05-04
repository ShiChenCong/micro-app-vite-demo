import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface IProps {

}

const Home: React.FC<IProps> = () => {
  const [value,setValue] = useState('')
  useEffect(() => {
    return () => {
      console.log('useEffect unmount')
    }
  })
  return (
    <div>
      <input onChange={(e) => {
        setValue(e.target.value)
      }} value={value} />
      <h1> vite Hello World</h1>
      {/* <Link to="about">vite About Us</Link> */}
    </div>
  )
}

export default Home
