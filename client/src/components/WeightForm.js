import "./WeightForm.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function WeightForm() {
  const [weight, setWeight] = useState(0);

  const handleInputChange = (event) => {
    setWeight(parseInt(event.target.value));
  };

  const decrementWeight = () => {
    if(weight > 0){
      setWeight(weight - 1);
    }
  };

  const incrementWeight = () => {
    setWeight(weight + 1);
  }

  console.log(weight);

  return (
    <div id="weight_form">
      <h3 id="weight_form_title"> Enter today's weight</h3>
      <form>
        <div>
          <table>
            <tbody>
            <tr>
              <td onClick={decrementWeight}><AiOutlineMinus/></td>
              <td>
                <input value={weight} onChange={handleInputChange}></input>
              </td>
              <td onClick={incrementWeight}> <AiOutlinePlus/></td>
            </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
