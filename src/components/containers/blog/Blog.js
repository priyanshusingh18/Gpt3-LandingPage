import React from "react";
import Article from "../../article/article";
import "./blog.css";
import blog01 from "../../../assets/blog01.png";
import blog02 from "../../../assets/blog02.png";
import blog03 from "../../../assets/blog03.png";
import blog04 from "../../../assets/blog04.png";
import blog05 from "../../../assets/blog05.png";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding " id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <di className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            imgUrl={blog01}
          />
        </div>{" "}
        <div className="gpt3__blog-container_groupB">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            imgUrl={blog02}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            imgUrl={blog03}
          />{" "}
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            imgUrl={blog04}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            imgUrl={blog05}
          />
        </div>
      </di>
    </div>
  );
};

export default Blog;
