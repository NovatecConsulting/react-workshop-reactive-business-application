import { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export function ControlledNicknameForm(
  { updateNickname, value}: {updateNickname: (nickname: string) => void, value: string}
) {
  const [state, setState] = useState(value)
  const [error, setError] = useState(false)


  const handleChange= (event) =>{
    const value: String = event.target.value
    setState(value);
    setError(!/^([^0-9]*)$/g.test(value)) // Does not allow numbers
  }

  return (<form onSubmit={(event) => {
    event.preventDefault()
    if (!error) updateNickname(state)}
  }>
    <Box display='flex' alignItems='center'>
      <TextField id='nickname'
                 label='Nickname'
                 value={state} onChange={handleChange}
                 error={error}
                 helperText={error ? 'Es sind nur Buchstaben erlaubt' : ''}/>
      <IconButton type={'submit'}><SaveIcon /></IconButton>
    </Box>
  </form>)
}
