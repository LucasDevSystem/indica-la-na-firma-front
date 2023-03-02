import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Modal,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
};

const ApplyModal = ({ open, job, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ minWidth: 300 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Deseja mesmo se candidatar?
              </Typography>
              <Typography variant="subtitle1" component="div">
                {job?.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{ fontSize: 13 }}
                onClick={() => onClose()}
                size="small"
              >
                cancelar
              </Button>
              <Button onClick={() => onConfirm()}>Sim</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplyModal;
