import './WeightForm.css'
import TextField from '@mui/material/TextField';


export default function WeightForm(){
  return(
    <div id = 'weight_form'>
      <form>
      <h3> Enter today's weight</h3>
      <TextField id = 'weight_input' variant='filled'></TextField>
      <input type='date'/>
      </form>
    </div>
  )
}