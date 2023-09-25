import { API_URL } from "@lib/constants";
import { string } from "yup";

export const getImageUrl = (
  imageUrl: string,
  container: string,
  base = API_URL,
  isBlog = false
) => {
  if (isBlog) {
    return `https://afriluckblog.afriluck.com/uploads/images/news/${imageUrl}`;
  }
  return `${base}/media/image-resize/?path=${container}&name=${imageUrl}&width=370&height=260`;
};
