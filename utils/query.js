const listCoursesQuery=`{
  listCourses(first: 0, resolverArgs: [{param: "list", value: "relevant"}]) {
    edges {
      node {
        id
        title
        headline
        enrolled_count
        view_count
        logo_url
        skill_level
        est_minutes
        primary_topic
        verified_cert_cost
      }
    }
  }
}`
const listCardsQuery=(course_id)=>`{
  listUnits(resolverArgs: [{param: "course_id", value: "${course_id}"}]) {
    edges {
      node {
        title
        has_exam
        id
        sections_list {
          title
          cards_list {
            title
            id
          }
          id
        }
      }
    }
  }
}`
module.exports={
  listCoursesQuery,
  listCardsQuery
}