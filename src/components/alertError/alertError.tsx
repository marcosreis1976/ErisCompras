import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
}

const AlertError: React.FC<ModalComponentProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Frase do Modal
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Esta é a frase que aparece dentro do modal quando ele é chamado.
        </Typography>
      </Box>
    </Modal>
  );
};

export default AlertError;