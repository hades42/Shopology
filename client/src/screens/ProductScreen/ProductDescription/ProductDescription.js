import classes from "./ProductDescription.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProductDescription = ({ content }) => {
  return (
    <div className={classes.wrapper}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={content}
        className={classes.content}
      ></ReactMarkdown>
    </div>
  );
};
export default ProductDescription;
