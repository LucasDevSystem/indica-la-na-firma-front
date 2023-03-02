/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */

import { Button, Grid, IconButton, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Add } from "@mui/icons-material";

const AutoCompleteSearch = ({ onSearch, serchSuggestions }) => {
  const [text, setText] = useState("");

  return (
    <Box
      sx={{
        marginTop: 4,
        width: 600,
        height: 150,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={16}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              height: 60,
              width: 600,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Pesquisar vagas"
              placeholder="Pesquisar vagas"
              variant="standard"
              onChange={(e) => setText(e.target.value)}
              style={{ width: "90%", border: "none", marginLeft: 10 }}
            />
            <IconButton
              onClick={() => onSearch(text)}
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={16}>
          <Button
            href="/jobregister"
            variant="outlined"
            style={{ width: 600, height: 50 }}
            endIcon={<Add></Add>}
          >
            Cadastrar vaga
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutoCompleteSearch;
