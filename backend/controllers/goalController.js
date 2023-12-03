// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goal" });
};

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.param.id}` });
};

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.param.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
