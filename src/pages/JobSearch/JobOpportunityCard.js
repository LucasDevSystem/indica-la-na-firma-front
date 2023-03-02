/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Collapse } from "@mui/material";

export default function JobOpportunityCard({
  title = "",
  description = "",
  location = "",
  created_at = "",
  offerer = "",
  onClick,
}) {
  const [expand, setExpand] = useState(false);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {offerer}
          </Typography>
          <Collapse in={expand}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {description}
            </Typography>
          </Collapse>
          <Typography variant="body2">
            <br />
            {location  + " "+ created_at.substring(0,10)}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{ fontSize: 13 }}
            onClick={() => setExpand(!expand)}
            size="small"
          >
            Veja mais
          </Button>
          <Button onClick={() => onClick()}>Candidatar</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
