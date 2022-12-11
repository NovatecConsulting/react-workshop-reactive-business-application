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
  // ToDo Aufgabe 3 Fehlerstate einführen

  // ToDo Aufgabe 3 Funktion zur Evaluierung des Inputs erstellen und diesen dort validieren.

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // ToDo Aufgabe 3 abfangen, wenn Input inkorrekt
        updateNickname(state);
      }}
    >
      <Box display="flex" alignItems="center">
        {/*ToDo Aufgabe 3 onChange anpassen*/}
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
