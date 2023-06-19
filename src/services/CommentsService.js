import { useHttp } from "../hooks/http.hook";

const CommentsService = () => {
  const { request } = useHttp();

  const _apiBase = "https://dummyjson.com/comments";

  const getAllComments = async () => {
    const res = await request(`${_apiBase}`);

    return await res.comments;
  };

  return {
    getAllComments
  };
};

export default CommentsService;
