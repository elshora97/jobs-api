const getAllJobs = async (req, res) => {
  res.send("All");
};

const getJob = async (req, res) => {
  res.send("Job");
};
const createJob = async (req, res) => {
  res.send("createJob");
};
const updateJob = async (req, res) => {
  res.send("updateJob");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
