
import api from "@/lib/axios";


export const blogService = {
  startBlog: async (userId: string) => {
    const response = await api.post(`/blogs/start`, { userId });
    return response.data;
  },

  getAllBlogs: async () => {
    const response = await api.get(`/blogs`);
    return response.data;
  },

  getBlogById: async (id: string) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  },

  generateBlogPost: async (data: { title: string; content: string }) => {
    const response = await api.post(`/blogs/generate`, data);
    return response.data;
  },

  deleteBlog: async (id: string) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  },
};

