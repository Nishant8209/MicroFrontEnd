import axiosInstance from "../../container/src/axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }
};


export const getProductById = async (productId) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data || null;
  } catch (error) {
    console.error(`Error fetching product by ID (${productId}):`, error.message);
    return null;
  }
}