/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";

import JobOpportunityList from "./JobOpportunityList";
import SuggestedJobsList from "./SuggestedJobsList";
import NavBar from "../../components/NavBar";
import AutoCompleteSearch from "./AutoCompleteSearch";

function JobSearch() {
  const [suggestedJobs, setSuggestedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleSearch = async (searchStr) => {
    const result = await axios.post("http://192.168.18.179:1388/job/search", {
      query: {
        value: searchStr,
      },
    });

    setJobs(result.data);
  };

  const handleApplyJob = async ({ id }) => {
    try {
      const result = await axios.post("http://192.168.18.179:1388/application", {
        userId: userData.id,
        jobId: id,
      });

      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSuggestedOpportunities = async () => {
    const result = await axios.get(
      "http://192.168.18.179:1388/job/suggesteds/4"
    );

    setSuggestedJobs(result.data);
  };

  // get suggested opportunies by user interests
  useEffect(() => {
    getSuggestedOpportunities();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Container maxWidth="sm">
        <AutoCompleteSearch
          onSearch={handleSearch}
          suggestions={searchSuggestions}
        />
        <Divider
          style={{
            borderBottomWidth: 4,
            margin: 10,
            backgroundColor: "#cceffe",
          }}
          variant="middle"
        />
        <Typography fontSize={30} textAlign={"center"}>
          Destaques com o seu perfil
        </Typography>
      </Container>
      <SuggestedJobsList
        jobs={suggestedJobs}
        onClick={(job) => handleApplyJob(job)}
      />
      <JobOpportunityList jobs={jobs} onClick={(job) => handleApplyJob(job)} />
    </div>
  );
}

export default JobSearch;
