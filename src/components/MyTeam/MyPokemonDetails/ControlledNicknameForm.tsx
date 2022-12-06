import { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export function ControlledNicknameForm({
  updateNickname,
  value,
}: {
  updateNickname: (nickname: string) => void;
  value: string;
}) {
  const [state, setState] = useState(value);

  // Aufgabe 3 Regex Tipp: !/^([^0-9]*)$/g

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateNickname(state);
      }}
    >
      <Box display="flex" alignItems="center">
        <TextField
          id="nickname"
          label="Nickname"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <IconButton type={'submit'}>
          <SaveIcon />
        </IconButton>
      </Box>
    </form>
  );
}
