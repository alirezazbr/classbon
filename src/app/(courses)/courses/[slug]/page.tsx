const CourseDetails = async ({ param }: { param: { slug: string } }) => {
  const { slug } = param;
  return <h1>This is the {slug} page</h1>;
};

export default CourseDetails;
