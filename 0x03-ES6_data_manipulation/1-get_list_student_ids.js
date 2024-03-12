export default function getListStudentIds(learners) {
  if (Array.isArray(learners)) {
    return learners.map((learner) => learner.id);
  }

  return [];
}
