const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  //   const post = await getBlog(slug);
  return (
    <div className="text-5xl flex justify-center items-center">
      <h1>{slug}</h1>
    </div>
  );
};

// const getBlog = async (slug: string): Promise<BlogDetails> => {
//   const res = await fetch(`${API_URL}/blog/${slug}`);
//   return res.json();
// };

export default BlogDetails;
