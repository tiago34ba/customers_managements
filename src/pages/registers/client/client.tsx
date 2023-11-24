import Single from "../../../components/single/Single"
import { singleProduct } from "../../../data"
import "./client.scss"

const Clients = () => {

  //Fetch data and send to Single Component
  return (
    <div className="client">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Clients