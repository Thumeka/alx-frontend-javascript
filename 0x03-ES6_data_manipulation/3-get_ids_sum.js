export default function getStudentIdsSum(learners) {
  return learners.reduce((counter, learner) => counter + learner.id, 0);
}
