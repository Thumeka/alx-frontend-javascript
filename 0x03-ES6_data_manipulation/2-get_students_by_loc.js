export default function getStudentsByLocation(learners, city) {
  return learners.filter((obj) => obj.location === city);
}
