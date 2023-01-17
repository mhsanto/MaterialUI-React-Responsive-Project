import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import {
  Add as AddIcon,
  AddAPhoto,
  AddLocationAlt,
  AddPhotoAlternate,
  AddReaction,
  AddRoadTwoTone,
  PersonAdd,
  RestoreFromTrash,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import Image from "../assets/me.jpg";
const CustomModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: ".1rem",
  marginBottom: ".6rem",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="ADD NEW POST"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={250}
          width={350}
          p={3}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={Image} />
            <Typography variant="span">Mahmodul Hasan</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%", marginTop: ".2rem" }}
            multiline
            rows={3}
            placeholder="Write Something........"
            variant="standard"
          />
          <Stack direction="row" mt={2} gap={1} sx={{ cursor: "pointer" }}>
            <AddReaction color="error" />
            <AddAPhoto color="primary" />
            <AddLocationAlt color="secondary" />
            <PersonAdd color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: "15px" }}
          >
            <Button>Post</Button>
            <Button sx={{ width: "10px" }}>
              <RestoreFromTrash />
            </Button>
          </ButtonGroup>
        </Box>
      </CustomModal>
    </>
  );
};

export default Add;
