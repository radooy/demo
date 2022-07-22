import { Box, Modal, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/features/appSlice";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ede232',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    alignText: 'center'
  };

const PriceModal = () => {
    const open = useSelector((state: any) => state.app.modalOpen);
    const price = useSelector((state: any) => state.app.btcPrice);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
    };

  return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
              Current BTC price is:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} align="center">
              {price}
            </Typography>
          </Box>
      </Modal>
  );
};

export default PriceModal;
