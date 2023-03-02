/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ApplyModal from "./ApplyModal";

import JobOpportunityCard from "./JobOpportunityCard";

const CardStyle = {
  height: "100%",
  width: 600,
  margin: 1,
  backgroundColor: (theme) =>
    theme.palette.mode === "dark" ? "#79d5e8" : "#cceffe",
};

const JobOpportunityList = ({ jobs = [], onClick }) => {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const onApply = (job) => {
    setIsmodalOpen(true);
    setSelectedJob(job);
  };

  const handleClose = () => setIsmodalOpen(false);
  return (
    <Container>
      <ApplyModal
        onConfirm={() => {
          onClick(selectedJob);
          handleClose();
        }}
        open={isModalOpen}
        job={selectedJob}
        onClose={handleClose}
      ></ApplyModal>
      <Typography fontSize={30} textAlign={"center"}>
      {jobs.length? "Resultados da pesquisa": "Busque pela sua oportunidade"}
      </Typography>
      <div style={{ width: "50%", margin: "auto" }}>
        {jobs.map((job, index) => (
          <Paper key={index} sx={CardStyle}>
            <JobOpportunityCard
              onClick={() => onApply(job)}
              {...job}
            ></JobOpportunityCard>
          </Paper>
        ))}
      </div>
    </Container>
  );
};

export default JobOpportunityList;
